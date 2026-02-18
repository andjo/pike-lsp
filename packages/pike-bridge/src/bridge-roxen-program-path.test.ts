// @ts-ignore - Bun test types
import { describe, it } from 'bun:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PikeBridge } from './bridge.js';

describe('PikeBridge Roxen Program Path', () => {
  it('should resolve inherit "module" with PIKE_PROGRAM_PATH', async () => {
    const candidatePaths = [
      path.resolve(process.cwd(), '../../pike-scripts/LSP.pmod/RoxenStubs.pmod'),
      path.resolve(__dirname, '../../../pike-scripts/LSP.pmod/RoxenStubs.pmod'),
      path.resolve(__dirname, '../../../../pike-scripts/LSP.pmod/RoxenStubs.pmod'),
    ];
    const roxenStubPath = candidatePaths.find(p => fs.existsSync(p)) ?? candidatePaths[0]!;

    const bridge = new PikeBridge({
      env: {
        PIKE_PROGRAM_PATH: roxenStubPath,
      },
    });

    const code = `
            inherit "module";
            constant module_type = MODULE_LOCATION;
            constant module_name = "Roxen Program Path Test";

            void create() {
                defvar("mountpoint", "/", "Mount point", TYPE_LOCATION, 0);
            }

            string query_location(RequestID id, string path) {
                return "ok";
            }
        `;

    try {
      const available = await bridge.checkPike();
      assert.equal(available, true, 'Pike should be available');

      await bridge.start();
      const result = await bridge.compile(code, 'test-roxen.pike');
      const diagnosticMessages = (result.diagnostics || []).map(d => d.message);

      const moduleResolutionErrors = diagnosticMessages.filter(message =>
        /Cast "module" to program failed|Illegal program pointer|Error finding program/.test(
          message
        )
      );

      assert.equal(
        moduleResolutionErrors.length,
        0,
        `Expected no module resolution errors, got: ${moduleResolutionErrors.join('; ')}`
      );
    } finally {
      await bridge.stop();
    }
  });
});
