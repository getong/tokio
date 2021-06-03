window.BENCHMARK_DATA = {
  "lastUpdate": 1622726104059,
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
    ]
  }
}