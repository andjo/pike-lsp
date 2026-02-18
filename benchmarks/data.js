window.BENCHMARK_DATA = {
  "lastUpdate": 1771453969560,
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
      },
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
          "id": "fa4e818d55726ffe51db88d5ca9468c8b750ca92",
          "message": "fix: prevent documentSymbol range validation failures\n\nEnsure Roxen-enhanced symbols always keep selectionRange inside range so VS Code accepts document symbols without request errors.",
          "timestamp": "2026-02-15T21:23:46+01:00",
          "tree_id": "0bc1b713cc738219b49e3cfd90b198899a63c506",
          "url": "https://github.com/andjo/pike-lsp/commit/fa4e818d55726ffe51db88d5ca9468c8b750ca92"
        },
        "date": 1771187311873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "PikeBridge.start() [Cold Start]",
            "value": 202.08199058333335,
            "unit": "ms"
          },
          {
            "name": "PikeBridge.start() with detailed metrics [Cold Start]",
            "value": 255.59049008333335,
            "unit": "ms"
          },
          {
            "name": "Cold Start + First Request (getVersionInfo)",
            "value": 258.04054441666665,
            "unit": "ms"
          },
          {
            "name": "Cold Start + Introspect",
            "value": 260.80832641666666,
            "unit": "ms"
          },
          {
            "name": "Validation: Small File (~15 lines)",
            "value": 1.2203912070796459,
            "unit": "ms"
          },
          {
            "name": "Validation: Medium File (~100 lines)",
            "value": 4.017731520467836,
            "unit": "ms"
          },
          {
            "name": "Validation: Large File (~1000 lines)",
            "value": 50.7795798,
            "unit": "ms"
          },
          {
            "name": "Validation Legacy (3 calls: analyze + parse + analyzeUninitialized)",
            "value": 5.087990910447761,
            "unit": "ms"
          },
          {
            "name": "Validation Consolidated (1 call: analyze with all includes)",
            "value": 4.014063964912281,
            "unit": "ms"
          },
          {
            "name": "Cache Hit: analyze with same document version",
            "value": 0.2681414406504065,
            "unit": "ms"
          },
          {
            "name": "Cache Miss: analyze with different version",
            "value": 0.2787432516891892,
            "unit": "ms"
          },
          {
            "name": "Closed File: analyze without version (stat-based key)",
            "value": 0.5369339636363636,
            "unit": "ms"
          },
          {
            "name": "Cross-file: compile main with inherited utils",
            "value": 0.21237052960526315,
            "unit": "ms"
          },
          {
            "name": "Cross-file: recompile main (cache hit)",
            "value": 0.20590118052869116,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio\") - warm",
            "value": 1.6666814275362318,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String\")",
            "value": 0.36326456832971804,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Array\")",
            "value": 0.3615107887628309,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Mapping\")",
            "value": 0.10057052598162072,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio.File\") - nested",
            "value": 0.6100556475336323,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String.SplitIterator\") - nested",
            "value": 0.08092255592515593,
            "unit": "ms"
          },
          {
            "name": "First diagnostic after document change",
            "value": 0.36612393567894447,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Validation with 250ms debounce",
            "value": 250.85724208333335,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Rapid edit simulation (5x50ms)",
            "value": 254.95038425,
            "unit": "ms"
          },
          {
            "name": "Validation: sequential warm revalidation",
            "value": 0.39574857311320755,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveStdlib(\"Stdio.File\")",
            "value": 0.5730851903959562,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveModule(\"Stdio.File\")",
            "value": 0.08199827319804058,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Warm Cache)",
            "value": 5.642288,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Cold Cache)",
            "value": 5.618810421487603,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andersjo@gmail.com",
            "name": "Anders Johansson",
            "username": "andjo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69cdfd8b637312b646f74f7501f52ca219959612",
          "message": "Merge branch 'TheSmuks:main' into main",
          "timestamp": "2026-02-18T19:24:29+01:00",
          "tree_id": "60db2723b6796186e516fcbb856a62d9564b96c3",
          "url": "https://github.com/andjo/pike-lsp/commit/69cdfd8b637312b646f74f7501f52ca219959612"
        },
        "date": 1771439168386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "PikeBridge.start() [Cold Start]",
            "value": 202.76887208333335,
            "unit": "ms"
          },
          {
            "name": "PikeBridge.start() with detailed metrics [Cold Start]",
            "value": 258.73333916666667,
            "unit": "ms"
          },
          {
            "name": "Cold Start + First Request (getVersionInfo)",
            "value": 258.52580808333335,
            "unit": "ms"
          },
          {
            "name": "Cold Start + Introspect",
            "value": 264.1230185,
            "unit": "ms"
          },
          {
            "name": "Validation: Small File (~15 lines)",
            "value": 1.3479582647058823,
            "unit": "ms"
          },
          {
            "name": "Validation: Medium File (~100 lines)",
            "value": 4.7816983916083915,
            "unit": "ms"
          },
          {
            "name": "Validation: Large File (~1000 lines)",
            "value": 56.426326555555555,
            "unit": "ms"
          },
          {
            "name": "Validation Legacy (3 calls: analyze + parse + analyzeUninitialized)",
            "value": 5.560005585365853,
            "unit": "ms"
          },
          {
            "name": "Validation Consolidated (1 call: analyze with all includes)",
            "value": 4.438195922077922,
            "unit": "ms"
          },
          {
            "name": "Cache Hit: analyze with same document version",
            "value": 0.30801116533583844,
            "unit": "ms"
          },
          {
            "name": "Cache Miss: analyze with different version",
            "value": 0.2425825131238447,
            "unit": "ms"
          },
          {
            "name": "Closed File: analyze without version (stat-based key)",
            "value": 0.5117081399394856,
            "unit": "ms"
          },
          {
            "name": "Cross-file: compile main with inherited utils",
            "value": 0.19662537057387058,
            "unit": "ms"
          },
          {
            "name": "Cross-file: recompile main (cache hit)",
            "value": 0.2081438758234519,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio\") - warm",
            "value": 1.6280324609929078,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String\")",
            "value": 0.3392267100712106,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Array\")",
            "value": 0.32137329012048194,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Mapping\")",
            "value": 0.09612253216,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio.File\") - nested",
            "value": 0.5496356761363637,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String.SplitIterator\") - nested",
            "value": 0.06742014174397785,
            "unit": "ms"
          },
          {
            "name": "First diagnostic after document change",
            "value": 0.3400905752797559,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Validation with 250ms debounce",
            "value": 251.14562283333333,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Rapid edit simulation (5x50ms)",
            "value": 255.158097,
            "unit": "ms"
          },
          {
            "name": "Validation: sequential warm revalidation",
            "value": 0.3392058448275862,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveStdlib(\"Stdio.File\")",
            "value": 0.568899275862069,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveModule(\"Stdio.File\")",
            "value": 0.0734292840101523,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Warm Cache)",
            "value": 5.9135562869565215,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Cold Cache)",
            "value": 6.051784767857143,
            "unit": "ms"
          }
        ]
      },
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
          "id": "a61a4037b9a2beada3ba5156783985142a3fbeb6",
          "message": "fix: preserve Roxen completions when RXML extraction fails\n\nRoxen MODULE_* suggestions were dropped because completion routed RXML extraction and Roxen completions through the same try/catch path.\n\nIsolate RXML extraction errors, add BridgeManager support for roxenExtractRXMLStrings, and cover the regression with a completion-provider test.",
          "timestamp": "2026-02-18T22:25:35+01:00",
          "tree_id": "3cbcd3de6f0191e1d8228be579bbe1df67485e1c",
          "url": "https://github.com/andjo/pike-lsp/commit/a61a4037b9a2beada3ba5156783985142a3fbeb6"
        },
        "date": 1771453968798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "PikeBridge.start() [Cold Start]",
            "value": 202.85301766666666,
            "unit": "ms"
          },
          {
            "name": "PikeBridge.start() with detailed metrics [Cold Start]",
            "value": 258.95113266666664,
            "unit": "ms"
          },
          {
            "name": "Cold Start + First Request (getVersionInfo)",
            "value": 257.81962791666666,
            "unit": "ms"
          },
          {
            "name": "Cold Start + Introspect",
            "value": 263.38626891666667,
            "unit": "ms"
          },
          {
            "name": "Validation: Small File (~15 lines)",
            "value": 1.3760912075848302,
            "unit": "ms"
          },
          {
            "name": "Validation: Medium File (~100 lines)",
            "value": 4.647082469387755,
            "unit": "ms"
          },
          {
            "name": "Validation: Large File (~1000 lines)",
            "value": 58.92084233333333,
            "unit": "ms"
          },
          {
            "name": "Validation Legacy (3 calls: analyze + parse + analyzeUninitialized)",
            "value": 5.828397564102564,
            "unit": "ms"
          },
          {
            "name": "Validation Consolidated (1 call: analyze with all includes)",
            "value": 4.625627993243244,
            "unit": "ms"
          },
          {
            "name": "Cache Hit: analyze with same document version",
            "value": 0.2791916570824524,
            "unit": "ms"
          },
          {
            "name": "Cache Miss: analyze with different version",
            "value": 0.2745038993344426,
            "unit": "ms"
          },
          {
            "name": "Closed File: analyze without version (stat-based key)",
            "value": 0.596438139718805,
            "unit": "ms"
          },
          {
            "name": "Cross-file: compile main with inherited utils",
            "value": 0.2025007810725552,
            "unit": "ms"
          },
          {
            "name": "Cross-file: recompile main (cache hit)",
            "value": 0.19816133757368912,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio\") - warm",
            "value": 1.8019920913838121,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String\")",
            "value": 0.3570149114194237,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Array\")",
            "value": 0.3535061676361713,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Mapping\")",
            "value": 0.1096514249368459,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"Stdio.File\") - nested",
            "value": 0.5669809232693912,
            "unit": "ms"
          },
          {
            "name": "resolveStdlib(\"String.SplitIterator\") - nested",
            "value": 0.07996540805387575,
            "unit": "ms"
          },
          {
            "name": "First diagnostic after document change",
            "value": 0.3913232956926659,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Validation with 250ms debounce",
            "value": 251.12475675,
            "unit": "ms"
          },
          {
            "name": "[Debounce] Rapid edit simulation (5x50ms)",
            "value": 255.12455791666665,
            "unit": "ms"
          },
          {
            "name": "Validation: sequential warm revalidation",
            "value": 0.4020366325553561,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveStdlib(\"Stdio.File\")",
            "value": 0.5639189253731344,
            "unit": "ms"
          },
          {
            "name": "Hover: resolveModule(\"Stdio.File\")",
            "value": 0.08898410935619736,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Warm Cache)",
            "value": 6.196251245454545,
            "unit": "ms"
          },
          {
            "name": "Completion: getCompletionContext (Large File, Cold Cache)",
            "value": 6.225733155963303,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}