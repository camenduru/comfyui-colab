{
    "last_node_id": 18,
    "last_link_id": 24,
    "nodes": [
      {
        "id": 14,
        "type": "ImageUpscaleWithModel",
        "pos": [
          1059,
          463
        ],
        "size": {
          "0": 241.79998779296875,
          "1": 46
        },
        "flags": {},
        "order": 10,
        "mode": 0,
        "inputs": [
          {
            "name": "upscale_model",
            "type": "UPSCALE_MODEL",
            "link": 14
          },
          {
            "name": "image",
            "type": "IMAGE",
            "link": 22
          }
        ],
        "outputs": [
          {
            "name": "IMAGE",
            "type": "IMAGE",
            "links": [
              16
            ],
            "slot_index": 0
          }
        ],
        "properties": {}
      },
      {
        "id": 9,
        "type": "SaveImage",
        "pos": [
          1365,
          358
        ],
        "size": {
          "0": 455.9945373535156,
          "1": 553.0919189453125
        },
        "flags": {},
        "order": 12,
        "mode": 0,
        "inputs": [
          {
            "name": "images",
            "type": "IMAGE",
            "link": 16
          }
        ],
        "properties": {},
        "widgets_values": [
          "ComfyUI"
        ]
      },
      {
        "id": 17,
        "type": "PreviewImage",
        "pos": [
          1596,
          57
        ],
        "size": {
          "0": 210,
          "1": 250
        },
        "flags": {},
        "order": 11,
        "mode": 0,
        "inputs": [
          {
            "name": "images",
            "type": "IMAGE",
            "link": 23
          }
        ],
        "properties": {}
      },
      {
        "id": 18,
        "type": "PreviewImage",
        "pos": [
          1356,
          51
        ],
        "size": {
          "0": 210,
          "1": 250
        },
        "flags": {},
        "order": 9,
        "mode": 0,
        "inputs": [
          {
            "name": "images",
            "type": "IMAGE",
            "link": 24
          }
        ],
        "properties": {}
      },
      {
        "id": 15,
        "type": "VAELoader",
        "pos": [
          983,
          301
        ],
        "size": {
          "0": 315,
          "1": 58
        },
        "flags": {},
        "order": 0,
        "mode": 0,
        "outputs": [
          {
            "name": "VAE",
            "type": "VAE",
            "links": [
              20
            ],
            "slot_index": 0
          }
        ],
        "properties": {},
        "widgets_values": [
          "faetastic_.vae.pt"
        ]
      },
      {
        "id": 16,
        "type": "VAEDecode",
        "pos": [
          1089,
          214
        ],
        "size": {
          "0": 210,
          "1": 46
        },
        "flags": {},
        "order": 8,
        "mode": 0,
        "inputs": [
          {
            "name": "samples",
            "type": "LATENT",
            "link": 21
          },
          {
            "name": "vae",
            "type": "VAE",
            "link": 20
          }
        ],
        "outputs": [
          {
            "name": "IMAGE",
            "type": "IMAGE",
            "links": [
              22,
              23
            ],
            "slot_index": 0
          }
        ],
        "properties": {}
      },
      {
        "id": 13,
        "type": "UpscaleModelLoader",
        "pos": [
          983,
          557
        ],
        "size": {
          "0": 315,
          "1": 58
        },
        "flags": {},
        "order": 1,
        "mode": 0,
        "outputs": [
          {
            "name": "UPSCALE_MODEL",
            "type": "UPSCALE_MODEL",
            "links": [
              14
            ],
            "slot_index": 0
          }
        ],
        "properties": {},
        "widgets_values": [
          "RealESRGAN_x2plus.pth"
        ]
      },
      {
        "id": 8,
        "type": "VAEDecode",
        "pos": [
          1076,
          48
        ],
        "size": {
          "0": 210,
          "1": 46
        },
        "flags": {},
        "order": 7,
        "mode": 0,
        "inputs": [
          {
            "name": "samples",
            "type": "LATENT",
            "link": 7
          },
          {
            "name": "vae",
            "type": "VAE",
            "link": 19
          }
        ],
        "outputs": [
          {
            "name": "IMAGE",
            "type": "IMAGE",
            "links": [
              24
            ],
            "slot_index": 0
          }
        ],
        "properties": {}
      },
      {
        "id": 3,
        "type": "KSampler",
        "pos": [
          624,
          51
        ],
        "size": {
          "0": 315,
          "1": 262
        },
        "flags": {},
        "order": 6,
        "mode": 0,
        "inputs": [
          {
            "name": "model",
            "type": "MODEL",
            "link": 1
          },
          {
            "name": "positive",
            "type": "CONDITIONING",
            "link": 4
          },
          {
            "name": "negative",
            "type": "CONDITIONING",
            "link": 6
          },
          {
            "name": "latent_image",
            "type": "LATENT",
            "link": 2
          }
        ],
        "outputs": [
          {
            "name": "LATENT",
            "type": "LATENT",
            "links": [
              7,
              21
            ],
            "slot_index": 0
          }
        ],
        "properties": {},
        "widgets_values": [
          617281412569369,
          true,
          20,
          8,
          "euler",
          "normal",
          1
        ]
      },
      {
        "id": 6,
        "type": "CLIPTextEncode",
        "pos": [
          149,
          69
        ],
        "size": {
          "0": 422.84503173828125,
          "1": 164.31304931640625
        },
        "flags": {},
        "order": 4,
        "mode": 0,
        "inputs": [
          {
            "name": "clip",
            "type": "CLIP",
            "link": 17
          }
        ],
        "outputs": [
          {
            "name": "CONDITIONING",
            "type": "CONDITIONING",
            "links": [
              4
            ],
            "slot_index": 0
          }
        ],
        "properties": {},
        "widgets_values": [
          "masterpiece best quality girl standing in victorian clothing"
        ]
      },
      {
        "id": 4,
        "type": "CheckpointLoaderSimple",
        "pos": [
          242,
          279
        ],
        "size": {
          "0": 315,
          "1": 98
        },
        "flags": {},
        "order": 2,
        "mode": 0,
        "outputs": [
          {
            "name": "MODEL",
            "type": "MODEL",
            "links": [
              1
            ],
            "slot_index": 0
          },
          {
            "name": "CLIP",
            "type": "CLIP",
            "links": [
              17,
              18
            ],
            "slot_index": 1
          },
          {
            "name": "VAE",
            "type": "VAE",
            "links": [
              19
            ],
            "slot_index": 2
          }
        ],
        "properties": {},
        "widgets_values": [
          "faetastic_.safetensors"
        ]
      },
      {
        "id": 7,
        "type": "CLIPTextEncode",
        "pos": [
          126,
          435
        ],
        "size": {
          "0": 425.27801513671875,
          "1": 180.6060791015625
        },
        "flags": {},
        "order": 5,
        "mode": 0,
        "inputs": [
          {
            "name": "clip",
            "type": "CLIP",
            "link": 18
          }
        ],
        "outputs": [
          {
            "name": "CONDITIONING",
            "type": "CONDITIONING",
            "links": [
              6
            ],
            "slot_index": 0
          }
        ],
        "properties": {},
        "widgets_values": [
          "bad hands"
        ]
      },
      {
        "id": 5,
        "type": "EmptyLatentImage",
        "pos": [
          227,
          672
        ],
        "size": {
          "0": 315,
          "1": 106
        },
        "flags": {},
        "order": 3,
        "mode": 0,
        "outputs": [
          {
            "name": "LATENT",
            "type": "LATENT",
            "links": [
              2
            ],
            "slot_index": 0
          }
        ],
        "properties": {},
        "widgets_values": [
          512,
          512,
          1
        ]
      }
    ],
    "links": [
      [
        1,
        4,
        0,
        3,
        0,
        "MODEL"
      ],
      [
        2,
        5,
        0,
        3,
        3,
        "LATENT"
      ],
      [
        4,
        6,
        0,
        3,
        1,
        "CONDITIONING"
      ],
      [
        6,
        7,
        0,
        3,
        2,
        "CONDITIONING"
      ],
      [
        7,
        3,
        0,
        8,
        0,
        "LATENT"
      ],
      [
        14,
        13,
        0,
        14,
        0,
        "UPSCALE_MODEL"
      ],
      [
        16,
        14,
        0,
        9,
        0,
        "IMAGE"
      ],
      [
        17,
        4,
        1,
        6,
        0,
        "CLIP"
      ],
      [
        18,
        4,
        1,
        7,
        0,
        "CLIP"
      ],
      [
        19,
        4,
        2,
        8,
        1,
        "VAE"
      ],
      [
        20,
        15,
        0,
        16,
        1,
        "VAE"
      ],
      [
        21,
        3,
        0,
        16,
        0,
        "LATENT"
      ],
      [
        22,
        16,
        0,
        14,
        1,
        "IMAGE"
      ],
      [
        23,
        16,
        0,
        17,
        0,
        "IMAGE"
      ],
      [
        24,
        8,
        0,
        18,
        0,
        "IMAGE"
      ]
    ],
    "groups": [],
    "config": {},
    "extra": {},
    "version": 0.4
  }