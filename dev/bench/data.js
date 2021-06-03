window.BENCHMARK_DATA = {
  "lastUpdate": 1622726111787,
  "repoUrl": "https://github.com/getong/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d8b37d51a7d0cdf5a0fbf754240c929fb69e9f2",
          "message": "macros: suppress clippy::default_numeric_fallback lint in generated code (#3831)",
          "timestamp": "2021-06-02T18:16:23+09:00",
          "tree_id": "9d4afa2a70f19ef453794a3df3368a259a27e377",
          "url": "https://github.com/getong/tokio/commit/9d8b37d51a7d0cdf5a0fbf754240c929fb69e9f2"
        },
        "date": 1622726101750,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 842,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14596,
            "range": "± 5208",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 940,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15009,
            "range": "± 4297",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 595,
            "range": "± 32",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d8b37d51a7d0cdf5a0fbf754240c929fb69e9f2",
          "message": "macros: suppress clippy::default_numeric_fallback lint in generated code (#3831)",
          "timestamp": "2021-06-02T18:16:23+09:00",
          "tree_id": "9d4afa2a70f19ef453794a3df3368a259a27e377",
          "url": "https://github.com/getong/tokio/commit/9d8b37d51a7d0cdf5a0fbf754240c929fb69e9f2"
        },
        "date": 1622726103685,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179489,
            "range": "± 16638",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 670758,
            "range": "± 87954",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4978647,
            "range": "± 1372793",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19727314,
            "range": "± 4334810",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d8b37d51a7d0cdf5a0fbf754240c929fb69e9f2",
          "message": "macros: suppress clippy::default_numeric_fallback lint in generated code (#3831)",
          "timestamp": "2021-06-02T18:16:23+09:00",
          "tree_id": "9d4afa2a70f19ef453794a3df3368a259a27e377",
          "url": "https://github.com/getong/tokio/commit/9d8b37d51a7d0cdf5a0fbf754240c929fb69e9f2"
        },
        "date": 1622726110745,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 12578,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 809,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 540,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 12698,
            "range": "± 2485",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 810,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}