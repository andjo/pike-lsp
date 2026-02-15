window.BENCHMARK_DATA = {
  "lastUpdate": 1771160263421,
  "repoUrl": "https://github.com/andjo/pike-lsp",
  "entries": {
    "Pike LSP Performance": [
      {
        "commit": {
          "author": {
            "email": "anders@roxen.com",
            "name": "Anders Johansson",
            "username": "andjo"
          },
          "committer": {
            "email": "anders@roxen.com",
            "name": "Anders Johansson",
            "username": "andjo"
          },
          "distinct": true,
          "id": "6cb36df37fd039f39c18b37cc88750b3aace0022",
          "message": "Add pnpm-workspace.yaml so build instructions work",
          "timestamp": "2026-02-15T13:56:10+01:00",
          "tree_id": "1458cede8959f703b7b4e9bf5ecdd518b456f8e0",
          "url": "https://github.com/andjo/pike-lsp/commit/6cb36df37fd039f39c18b37cc88750b3aace0022"
        },
        "date": 1771160262806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "PikeBridge.start() [Cold Start]",
            "value": 201.75678808333333,
            "unit": "ms"
          },
          {
            "name": "PikeBridge.start() with detailed metrics [Cold Start]",
            "value": 259.54076733333335,
            "unit": "ms"
          },
          {
            "name": "Cold Start + First Request (getVersionInfo)",
            "value": 258.73908858333334,
            "unit": "ms"
          },
          {
            "name": "Cold Start + Introspect",
            "value": 264.57984825,
            "unit": "ms"
          },
          {
            "name": "Validation: Small File (~15 lines)",
            "value": 1.2966066516007533,
            "unit": "ms"
          },
          {
            "name": "Validation: Medium File (~100 lines)",
            "value": 4.130407506024096,
            "unit": "ms"
          },
          {
            "name": "Validation: Large File (~1000 lines)",
            "value": 51.8960563,
            "unit": "ms"
          },
          {
            "name": "Validation Legacy (3 calls: analyze + parse + analyzeUninitialized)",
            "value": 5.348204409448819,
            "unit": "ms"
          },
          {
            "name": "Validation Consolidated (1 call: analyze with all includes)",
            "value": 4.1054624431137725,
            "unit": "ms"
          },
          {
            "name": "Cache Hit: analyze with same document version",
            "value": 0.30941117743445695,
            "unit": "ms"
          },
          {
            "name": "Cache Miss: analyze with different version",
            "value": 0.29574057162041184,
            "unit": "ms"
          },
          {
            "name": "Closed File: analyze without version (stat-based key)",
            "value": 0.5943066133567663,
            "unit": "ms"
          },
          {
            "name": "Cross-file: compile main with inherited utils",
            "value": 0.21410829369012221,
            "unit": "ms"
          },
          {
            "name": "Cross-file: recompile main (cache hit)",
            "value": 0.1964714625346901,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio\") - warm",
            "value": 1.7221342325,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String\")",
            "value": 0.4050967360774818,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Array\")",
            "value": 0.4209464695543001,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Mapping\")",
            "value": 0.11477826255707763,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio.File\") - nested",
            "value": 0.6181372897366031,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String.SplitIterator\") - nested",
            "value": 0.0905181121495327,
            "unit": "ms"
          },
          {
            "name": "First diagnostic after document change",
            "value": 0.3994428233194527,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Validation with 250ms debounce",
            "value": 251.23659758333335,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Rapid edit simulation (5x50ms)",
            "value": 256.33515758333334,
            "unit": "ms"
          },
          {
            "name": "Validation: sequential warm revalidation",
            "value": 0.40744564602307226,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveStdlib(\"Stdio.File\")",
            "value": 0.632642783255814,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveModule(\"Stdio.File\")",
            "value": 0.09067345892090742,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Warm Cache)",
            "value": 5.7320545798319325,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Cold Cache)",
            "value": 5.791289282051282,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}