window.BENCHMARK_DATA = {
  "lastUpdate": 1624795333223,
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
      },
      {
        "commit": {
          "author": {
            "email": "53383020+sb64@users.noreply.github.com",
            "name": "sb64",
            "username": "sb64"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845626410a2e42902882f9750a9f8e2b38cf5a36",
          "message": "sync: implement From<T> for OnceCell<T> (#3877)",
          "timestamp": "2021-06-22T15:11:01+02:00",
          "tree_id": "53b9faf0e24729cdf15f5095ed9c3f0c0f6fc535",
          "url": "https://github.com/getong/tokio/commit/845626410a2e42902882f9750a9f8e2b38cf5a36"
        },
        "date": 1624795332158,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 933,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16188,
            "range": "± 7287",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 936,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16377,
            "range": "± 5628",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 591,
            "range": "± 57",
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
      },
      {
        "commit": {
          "author": {
            "email": "53383020+sb64@users.noreply.github.com",
            "name": "sb64",
            "username": "sb64"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845626410a2e42902882f9750a9f8e2b38cf5a36",
          "message": "sync: implement From<T> for OnceCell<T> (#3877)",
          "timestamp": "2021-06-22T15:11:01+02:00",
          "tree_id": "53b9faf0e24729cdf15f5095ed9c3f0c0f6fc535",
          "url": "https://github.com/getong/tokio/commit/845626410a2e42902882f9750a9f8e2b38cf5a36"
        },
        "date": 1624794987247,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 203187,
            "range": "± 24980",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727920,
            "range": "± 57523",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5553429,
            "range": "± 642439",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22375548,
            "range": "± 5088162",
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
    ],
    "sync_mpsc": [
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
        "date": 1622726122623,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5947612,
            "range": "± 2350598",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5642690,
            "range": "± 1411961",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6025394,
            "range": "± 2751077",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 253,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 253,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 254,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 23776,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 773,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 933674,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 679136,
            "range": "± 1184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "53383020+sb64@users.noreply.github.com",
            "name": "sb64",
            "username": "sb64"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845626410a2e42902882f9750a9f8e2b38cf5a36",
          "message": "sync: implement From<T> for OnceCell<T> (#3877)",
          "timestamp": "2021-06-22T15:11:01+02:00",
          "tree_id": "53b9faf0e24729cdf15f5095ed9c3f0c0f6fc535",
          "url": "https://github.com/getong/tokio/commit/845626410a2e42902882f9750a9f8e2b38cf5a36"
        },
        "date": 1624795223600,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7331039,
            "range": "± 3141474",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6580266,
            "range": "± 1801727",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 7266219,
            "range": "± 2140708",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 299,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 299,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 299,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 30954,
            "range": "± 2511",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 952,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1138949,
            "range": "± 99039",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 808153,
            "range": "± 83058",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}