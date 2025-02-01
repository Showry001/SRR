(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "start": "this.init()",
 "contentOpaque": false,
 "children": [
  "this.MainViewer",
  "this.IconButton_5ED90638_505E_4551_41C2_0697AE237931",
  "this.Image_CE3771BA_C11D_8161_41E1_862916C00ACE",
  "this.Container_D27E61BA_C10B_8160_41D0_AF9DD4464A68"
 ],
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "definitions": [{
 "manualZoomSpeed": 0,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 6.37,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 6.37,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 6.37,
    "yawDelta": 18.5
   }
  ]
 },
 "initialPosition": {
  "yaw": 8.84,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": -6.39
 }
},
{
 "items": [
  {
   "media": "this.panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_rotation",
 "touchControlMode": "drag_rotation",
 "buttonZoomOut": "this.IconButton_D27D01BA_C10B_8160_41D0_592C60B305BD",
 "buttonZoomIn": [
  "this.IconButton_5ED90638_505E_4551_41C2_0697AE237931",
  "this.IconButton_D27E71BA_C10B_8160_41A2_6254319CE834"
 ],
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "partial": false,
 "label": "DJI_20241203123144_0186_D.jpg remove obj",
 "id": "panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "137%",
 "overlays": [
  "this.overlay_CC596C78_C069_7815_41DA_103C266EABEB",
  "this.overlay_CD3A7A11_C06A_B817_41E3_BFB3B0D67A85",
  "this.overlay_CF0BD814_C06B_581E_41E1_19A36A56BC08",
  "this.overlay_D6E852EE_C07B_A80D_41E7_BC2DD52F548C",
  "this.overlay_D14B60CF_C0AA_A80A_41E7_910180D5CA7E",
  "this.overlay_D1A357DD_C0DE_A80F_41DD_AA2890A2F13D",
  "this.overlay_D1821C3A_C0DE_D815_41E0_B9AE4D0E131E",
  "this.overlay_D1F09631_C0D9_6817_41C0_F707E21DC800",
  "this.overlay_D2A6CA59_C0D9_5817_41E5_D22ECF6F3674",
  "this.overlay_D045C044_C0DA_A87D_41E1_91560D02DCDC",
  "this.overlay_D1CA056E_C0DA_E80D_41DA_C1F42AEF07BC",
  "this.overlay_D10654BB_C0DB_680B_41E6_98E0FCAFDB3F",
  "this.overlay_D03190AA_C0DB_A835_41AC_6E580CB8C018",
  "this.overlay_D117607D_C0DA_A80F_41DD_205C6E9AFB8B",
  "this.overlay_D13B0A21_C0DA_D837_41E3_E14ADAFF0D16",
  "this.overlay_D15FF327_C0DA_E83B_41E0_EF0150C4997C",
  "this.overlay_D1448A43_C0DA_F87A_41D6_F688DD201FAB",
  "this.overlay_D1686215_C0DA_E81F_41DF_75A4FA665296",
  "this.overlay_D2B09494_C0DA_A81E_41D7_42C56FE5DA00",
  "this.overlay_D07731F0_C0BE_A815_41E1_5D800682988A",
  "this.overlay_D1A017C6_C0B9_A87D_41D4_BF547409B0A1",
  "this.overlay_D16228EB_C0B9_B80B_41DA_407813656186",
  "this.overlay_D101A429_C0B9_A837_41CA_1E168AC2B0D4",
  "this.overlay_D2E47E64_C0B9_583D_41B5_2D43C17D3F84",
  "this.overlay_D077062E_C0BA_A80A_41E5_12788B9118B2",
  "this.overlay_D1FC7301_C0BA_E9F7_41D8_F8C6CD919959",
  "this.overlay_D11959F0_C0BB_5815_41BF_B05C57A0FFAC",
  "this.overlay_D0759170_C0BB_E815_41D2_2A524A6B2003",
  "this.overlay_D18F9448_C0BB_A875_4139_8BE9813F10C0",
  "this.overlay_D1949CC9_C0BB_7877_41D1_42D74FC4827A",
  "this.overlay_D17DA803_C0BA_E7FB_41E3_D993C1D670F8",
  "this.overlay_D101E175_C0BA_E81E_41DE_2AA71BF7B00C",
  "this.overlay_D1AED937_C0B9_D81B_41D3_787F1430CCBD",
  "this.overlay_D15DF928_C0B9_D835_41CB_F9B1BF62FA68",
  "this.overlay_D1100A05_C0B9_7BFF_41CB_3EC9447E3EB1",
  "this.overlay_D29154FF_C0A6_A80B_41E7_76FF63BE43AC",
  "this.overlay_D06E7271_C0A6_E816_41C5_3284A18C2CEA",
  "this.overlay_D14E5A38_C0A7_D815_41D0_D58DCFE9D280",
  "this.overlay_D16A4932_C0A7_F815_41AF_E142BC2D32CA",
  "this.overlay_D129EB77_C0A7_B81B_41B4_7F0E446C1D8F",
  "this.overlay_D42E62AA_C0A9_A835_41D9_612877BE8ADB",
  "this.overlay_D0048E47_C0A9_587A_41E3_5CCCB58844A9",
  "this.overlay_D1FA59DD_C0A9_580F_419C_7453F4B459A4",
  "this.overlay_D1EA015B_C0AA_A80A_41D0_9EEEC12B4368",
  "this.overlay_D1BD05C0_C0AA_E875_41C4_1C627A28077D",
  "this.overlay_D118A65D_C0AB_680F_41E5_F274BB5E4172",
  "this.overlay_D210176A_C0AB_A809_41B2_55DE0D902641",
  "this.overlay_D2264049_C0AB_6877_41DE_C980B3D726B2",
  "this.overlay_D1FC415C_C0A9_A80D_41C8_B358CC825EEF",
  "this.overlay_D1988B18_C0A9_B815_41CB_D2312B3254FF",
  "this.overlay_D1839C16_C0A6_B81D_41D6_4347AB63D2BE",
  "this.overlay_D15FF661_C059_6836_41DC_B3AF1B4DC749",
  "this.overlay_D1638778_C059_A815_41E6_0139778B01A0",
  "this.overlay_D1078938_C059_F815_41E0_DBC3FB419F7F",
  "this.overlay_D2F431E7_C059_A83B_41D6_506728759AC8",
  "this.overlay_D28C8D60_C059_5836_41B2_85ED5CE444E7",
  "this.overlay_D001B4B9_C059_6817_41D8_2889BBC64AB0",
  "this.overlay_D1EB1CFF_C059_580B_41DB_7A3775D47DE9",
  "this.overlay_D2D4BBDE_C05B_580D_41CB_7427A407EEC2",
  "this.overlay_D1B1D377_C05E_A81B_41DF_C1831A7DE4A4",
  "this.overlay_D16F70D7_C067_E81A_41E6_AFD3A2089BBB",
  "this.overlay_D29A9AC2_C067_787A_418E_CE031AA61A5F",
  "this.overlay_D2A28AB5_C069_D81E_4197_DEC44491A73C",
  "this.overlay_D2EFE41C_C06A_E80D_41D5_26C20A065EBB",
  "this.overlay_D11180B8_C06E_A816_41D4_7158A8CCC819",
  "this.overlay_D2F97380_C06E_E8F5_41E3_ADC016956F75",
  "this.overlay_D31E0624_C079_A83D_41D7_8434711FC1B8",
  "this.overlay_D12FF820_C07E_B836_41E2_39DAD747ADCF",
  "this.overlay_D2F9ECF4_C069_B81E_41E0_9C8A772AFDDD",
  "this.overlay_D1B4F1A2_C06A_E835_41CD_C4489DECC4DF"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "toolTipFontSize": "1vmin",
 "toolTipPaddingBottom": 2,
 "playbackBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "width": "100%",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minHeight": 50,
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadow": true,
 "vrPointerSelectionColor": "#FF6600",
 "progressHeight": 10,
 "toolTipShadowOpacity": 1,
 "minWidth": 100,
 "progressBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarOpacity": 1,
 "progressBottom": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingBottom": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "shadow": false,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "paddingRight": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "top": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadWidth": 6,
 "borderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowBlurRadius": 3,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0
},
{
 "id": "IconButton_5ED90638_505E_4551_41C2_0697AE237931",
 "left": "27.55%",
 "width": "0.157%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "borderRadius": 0,
 "top": "42.55%",
 "minWidth": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "mode": "push",
 "height": "6.078%",
 "class": "IconButton",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5ED90638_505E_4551_41C2_0697AE237931.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button37510"
 }
},
{
 "maxHeight": 821,
 "maxWidth": 1460,
 "id": "Image_CE3771BA_C11D_8161_41E1_862916C00ACE",
 "left": "0%",
 "width": 212,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_CE3771BA_C11D_8161_41E1_862916C00ACE.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0.12%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "height": 145,
 "class": "Image",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image3598"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.IconButton_D27D01BA_C10B_8160_41D0_592C60B305BD",
  "this.IconButton_D27E71BA_C10B_8160_41A2_6254319CE834"
 ],
 "id": "Container_D27E61BA_C10B_8160_41D0_AF9DD4464A68",
 "left": "0%",
 "scrollBarMargin": 2,
 "width": 64,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 20,
 "overflow": "hidden",
 "borderRadius": 0,
 "top": "0%",
 "gap": 10,
 "minWidth": 20,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container37498"
 }
},
{
 "id": "IconButton_D27D01BA_C10B_8160_41D0_592C60B305BD",
 "width": 32,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "borderRadius": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "transparencyActive": true,
 "propagateClick": false,
 "borderSize": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D27D01BA_C10B_8160_41D0_592C60B305BD.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button37499"
 }
},
{
 "id": "IconButton_D27E71BA_C10B_8160_41A2_6254319CE834",
 "width": 32,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "borderRadius": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "transparencyActive": true,
 "propagateClick": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_D27E71BA_C10B_8160_41A2_6254319CE834_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D27E71BA_C10B_8160_41A2_6254319CE834_rollover.png",
 "iconURL": "skin/IconButton_D27E71BA_C10B_8160_41A2_6254319CE834.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button37510"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.51,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.04
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.51,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_0_0.png",
      "width": 934,
      "class": "ImageResourceLevel",
      "height": 526
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.04,
   "yaw": 0.26
  }
 ],
 "id": "overlay_CC596C78_C069_7815_41DA_103C266EABEB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 40.94,
   "yaw": 0.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_1_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.83
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 40.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_1_0.png",
      "width": 1369,
      "class": "ImageResourceLevel",
      "height": 943
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.83,
   "yaw": 0.59
  }
 ],
 "id": "overlay_CD3A7A11_C06A_B817_41E3_BFB3B0D67A85",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.78,
   "yaw": -0.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.63
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D1D011E5_C069_A83F_41C5_C0C6D26439AB",
   "yaw": -0.05,
   "pitch": -6.63,
   "distance": 50
  }
 ],
 "id": "overlay_CF0BD814_C06B_581E_41E1_19A36A56BC08",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 79.83,
   "yaw": -66.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_4_0_map.gif",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.52
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_4_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 79.83,
   "yaw": -66.48,
   "distance": 50
  }
 ],
 "id": "overlay_D6E852EE_C07B_A80D_41E7_BC2DD52F548C",
 "data": {
  "label": "Regional Ring Road"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_15_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_15_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_15_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 90,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_15_00000.png",
      "width": 1908,
      "class": "ImageResourceLevel",
      "height": 1908
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "yaw": 0
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_15_00002.png",
      "width": 1908,
      "class": "ImageResourceLevel",
      "height": 1908
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90,
   "distance": 50
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_15_00003.png",
      "width": 1908,
      "class": "ImageResourceLevel",
      "height": 1908
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90,
   "distance": 50
  }
 ],
 "id": "overlay_D14B60CF_C0AA_A80A_41E7_910180D5CA7E",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.69,
   "yaw": -32.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_16_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.69,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_16_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51,
   "yaw": -32.62
  }
 ],
 "id": "overlay_D1A357DD_C0DE_A80F_41DD_AA2890A2F13D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -38.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_17_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 14
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.68,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_17_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "yaw": -38.38
  }
 ],
 "id": "overlay_D1821C3A_C0DE_D815_41E0_B9AE4D0E131E",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.71,
   "yaw": -44.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_18_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.71,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_18_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12,
   "yaw": -44.18
  }
 ],
 "id": "overlay_D1F09631_C0D9_6817_41C0_F707E21DC800",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -49.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_19_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.43
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_19_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.43,
   "yaw": -49.47
  }
 ],
 "id": "overlay_D2A6CA59_C0D9_5817_41E5_D22ECF6F3674",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -55.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_20_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.69
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_20_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.69,
   "yaw": -55.04
  }
 ],
 "id": "overlay_D045C044_C0DA_A87D_41E1_91560D02DCDC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -60.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_21_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_21_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82,
   "yaw": -60.46
  }
 ],
 "id": "overlay_D1CA056E_C0DA_E80D_41DA_C1F42AEF07BC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.67,
   "yaw": -66.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_22_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.67,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_22_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "yaw": -66.2
  }
 ],
 "id": "overlay_D10654BB_C0DB_680B_41E6_98E0FCAFDB3F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.87,
   "yaw": -66.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_23_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.87,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_23_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94,
   "yaw": -66.19
  }
 ],
 "id": "overlay_D03190AA_C0DB_A835_41AC_6E580CB8C018",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.72,
   "yaw": -60.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_24_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.78
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.72,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_24_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.78,
   "yaw": -60.46
  }
 ],
 "id": "overlay_D117607D_C0DA_A80F_41DD_205C6E9AFB8B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.66,
   "yaw": -55.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_25_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.66,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_25_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72,
   "yaw": -55.03
  }
 ],
 "id": "overlay_D13B0A21_C0DA_D837_41E3_E14ADAFF0D16",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.82,
   "yaw": -49.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_26_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_26_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": -49.46
  }
 ],
 "id": "overlay_D15FF327_C0DA_E83B_41E0_EF0150C4997C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.88,
   "yaw": -44.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_27_1_6_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.88,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_27_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.13,
   "yaw": -44.24
  }
 ],
 "id": "overlay_D1448A43_C0DA_F87A_41D6_F688DD201FAB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -38.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_28_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 14
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.68,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_28_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "yaw": -38.38
  }
 ],
 "id": "overlay_D1686215_C0DA_E81F_41DF_75A4FA665296",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.69,
   "yaw": -32.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_29_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.69,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_29_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51,
   "yaw": -32.62
  }
 ],
 "id": "overlay_D2B09494_C0DA_A81E_41D7_42C56FE5DA00",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.77,
   "yaw": -71.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_30_1_6_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.77,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_30_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15,
   "yaw": -71.01
  }
 ],
 "id": "overlay_D07731F0_C0BE_A815_41E1_5D800682988A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.8,
   "yaw": -76.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_31_1_6_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.42
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.8,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_31_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.42,
   "yaw": -76.15
  }
 ],
 "id": "overlay_D1A017C6_C0B9_A87D_41D4_BF547409B0A1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.77,
   "yaw": -71.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_32_1_6_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.77,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_32_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15,
   "yaw": -71.01
  }
 ],
 "id": "overlay_D16228EB_C0B9_B80B_41DA_407813656186",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.69,
   "yaw": -76.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_33_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.41
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.69,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_33_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.41,
   "yaw": -76.18
  }
 ],
 "id": "overlay_D101A429_C0B9_A837_41CA_1E168AC2B0D4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.87,
   "yaw": -66.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_34_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.87,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_34_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94,
   "yaw": -66.19
  }
 ],
 "id": "overlay_D2E47E64_C0B9_583D_41B5_2D43C17D3F84",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.87,
   "yaw": -66.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_35_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.87,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_35_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94,
   "yaw": -66.19
  }
 ],
 "id": "overlay_D077062E_C0BA_A80A_41E5_12788B9118B2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.82,
   "yaw": -49.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_36_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_36_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": -49.46
  }
 ],
 "id": "overlay_D1FC7301_C0BA_E9F7_41D8_F8C6CD919959",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -81.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_37_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_37_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "yaw": -81.56
  }
 ],
 "id": "overlay_D11959F0_C0BB_5815_41BF_B05C57A0FFAC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -81.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_38_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_38_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "yaw": -81.56
  }
 ],
 "id": "overlay_D0759170_C0BB_E815_41D2_2A524A6B2003",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -87.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_39_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_39_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73,
   "yaw": -87.27
  }
 ],
 "id": "overlay_D18F9448_C0BB_A875_4139_8BE9813F10C0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.66,
   "yaw": -92.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_40_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.66,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_40_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "yaw": -92.68
  }
 ],
 "id": "overlay_D1949CC9_C0BB_7877_41D1_42D74FC4827A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -87.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_41_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_41_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72,
   "yaw": -87.26
  }
 ],
 "id": "overlay_D17DA803_C0BA_E7FB_41E3_D993C1D670F8",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -92.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_42_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_42_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.94,
   "yaw": -92.69
  }
 ],
 "id": "overlay_D101E175_C0BA_E81E_41DE_2AA71BF7B00C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.87,
   "yaw": -99.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_43_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.88
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.87,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_43_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.88,
   "yaw": -99.04
  }
 ],
 "id": "overlay_D1AED937_C0B9_D81B_41D3_787F1430CCBD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.86,
   "yaw": -98.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_44_1_6_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.86,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_44_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95,
   "yaw": -98.84
  }
 ],
 "id": "overlay_D15DF928_C0B9_D835_41CB_F9B1BF62FA68",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.71,
   "yaw": -105.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_45_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.71,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_45_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43,
   "yaw": -105.63
  }
 ],
 "id": "overlay_D1100A05_C0B9_7BFF_41CB_3EC9447E3EB1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.72,
   "yaw": -105.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_46_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.38
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.72,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_46_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.38,
   "yaw": -105.54
  }
 ],
 "id": "overlay_D29154FF_C0A6_A80B_41E7_76FF63BE43AC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -112.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_47_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_47_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43,
   "yaw": -112.23
  }
 ],
 "id": "overlay_D06E7271_C0A6_E816_41C5_3284A18C2CEA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -112.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_48_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.38
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_48_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.38,
   "yaw": -112.23
  }
 ],
 "id": "overlay_D14E5A38_C0A7_D815_41D0_D58DCFE9D280",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.75,
   "yaw": -119.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_49_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.75,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_49_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26,
   "yaw": -119.36
  }
 ],
 "id": "overlay_D16A4932_C0A7_F815_41AF_E142BC2D32CA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -126.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_50_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.68,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_50_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.39,
   "yaw": -126.66
  }
 ],
 "id": "overlay_D129EB77_C0A7_B81B_41B4_7F0E446C1D8F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -119.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_51_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_51_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.39,
   "yaw": -119.43
  }
 ],
 "id": "overlay_D42E62AA_C0A9_A835_41D9_612877BE8ADB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -133.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_52_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_52_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33,
   "yaw": -133.44
  }
 ],
 "id": "overlay_D0048E47_C0A9_587A_41E3_5CCCB58844A9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -126.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_53_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.68,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_53_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.39,
   "yaw": -126.66
  }
 ],
 "id": "overlay_D1FA59DD_C0A9_580F_419C_7453F4B459A4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.72,
   "yaw": -133.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_54_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.72,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_54_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33,
   "yaw": -133.5
  }
 ],
 "id": "overlay_D1EA015B_C0AA_A80A_41D0_9EEEC12B4368",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -140.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_55_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_55_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26,
   "yaw": -140.28
  }
 ],
 "id": "overlay_D1BD05C0_C0AA_E875_41C4_1C627A28077D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -146.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_56_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_56_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26,
   "yaw": -146.59
  }
 ],
 "id": "overlay_D118A65D_C0AB_680F_41E5_F274BB5E4172",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.75,
   "yaw": -152.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_57_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 14
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.19
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.75,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_57_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.19,
   "yaw": -152.71
  }
 ],
 "id": "overlay_D210176A_C0AB_A809_41B2_55DE0D902641",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.66,
   "yaw": -140.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_58_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.66,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_58_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26,
   "yaw": -140.21
  }
 ],
 "id": "overlay_D2264049_C0AB_6877_41DE_C980B3D726B2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -152.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_59_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 14
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.19
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_59_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.19,
   "yaw": -152.71
  }
 ],
 "id": "overlay_D1FC415C_C0A9_A80D_41C8_B358CC825EEF",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.75,
   "yaw": -146.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_60_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.75,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_60_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33,
   "yaw": -146.53
  }
 ],
 "id": "overlay_D1988B18_C0A9_B815_41CB_D2312B3254FF",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -159.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_61_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_61_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29,
   "yaw": -159.17
  }
 ],
 "id": "overlay_D1839C16_C0A6_B81D_41D6_4347AB63D2BE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -164.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_62_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.68,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_62_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29,
   "yaw": -164.92
  }
 ],
 "id": "overlay_D15FF661_C059_6836_41DC_B3AF1B4DC749",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -170.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_63_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_63_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26,
   "yaw": -170.73
  }
 ],
 "id": "overlay_D1638778_C059_A815_41E6_0139778B01A0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -159.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_64_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_64_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29,
   "yaw": -159.17
  }
 ],
 "id": "overlay_D1078938_C059_F815_41E0_DBC3FB419F7F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -164.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_65_1_6_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.68,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_65_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29,
   "yaw": -164.92
  }
 ],
 "id": "overlay_D2F431E7_C059_A83B_41D6_506728759AC8",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.74,
   "yaw": -177.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_66_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.74,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_66_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89,
   "yaw": -177.16
  }
 ],
 "id": "overlay_D28C8D60_C059_5836_41B2_85ED5CE444E7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.74,
   "yaw": -177.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_67_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.74,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_67_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89,
   "yaw": -177.16
  }
 ],
 "id": "overlay_D001B4B9_C059_6817_41D8_2889BBC64AB0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -170.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_68_1_6_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.73,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_68_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.26,
   "yaw": -170.73
  }
 ],
 "id": "overlay_D1EB1CFF_C059_580B_41DB_7A3775D47DE9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.16,
   "yaw": -121.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_69_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D18AC1C6_C059_687D_41E3_011083D5B8B5",
   "yaw": -121.79,
   "pitch": -0.99,
   "distance": 100
  }
 ],
 "id": "overlay_D2D4BBDE_C05B_580D_41CB_7427A407EEC2",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 40.27,
   "yaw": 170.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_70_0_map.gif",
      "width": 147,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.51
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_70_0.png",
      "width": 1342,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 40.27,
   "yaw": 170.22,
   "distance": 50
  }
 ],
 "id": "overlay_D1B1D377_C05E_A81B_41DF_C1831A7DE4A4",
 "data": {
  "label": "OUTER RING ROAD"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.16,
   "yaw": -151.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_71_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D1288832_C069_B815_41DB_D7A2D6215712",
   "yaw": -151.24,
   "pitch": -0.69,
   "distance": 100
  }
 ],
 "id": "overlay_D16F70D7_C067_E81A_41E6_AFD3A2089BBB",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 33.71,
   "yaw": -150.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_72_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_72_0.png",
      "width": 1126,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.71,
   "yaw": -150.82,
   "distance": 50
  }
 ],
 "id": "overlay_D29A9AC2_C067_787A_418E_CE031AA61A5F",
 "data": {
  "label": "MUMBAI HIGHWAY"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.12,
   "yaw": 45.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_73_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D1285832_C069_B815_41D4_EA2F01156FF9",
   "yaw": 45.09,
   "pitch": -7.53,
   "distance": 100
  }
 ],
 "id": "overlay_D2A28AB5_C069_D81E_4197_DEC44491A73C",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.91,
   "yaw": 156.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_74_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_74_0.png",
      "width": 365,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.91,
   "yaw": 156.6,
   "distance": 50
  }
 ],
 "id": "overlay_D2EFE41C_C06A_E80D_41D5_26C20A065EBB",
 "data": {
  "label": "29km"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.15,
   "yaw": 163.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_75_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.6
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D20CCD30_C06A_D815_41A4_08D8A2F8F05C",
   "yaw": 163.54,
   "pitch": -1.6,
   "distance": 100
  }
 ],
 "id": "overlay_D11180B8_C06E_A816_41D4_7158A8CCC819",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.48,
   "yaw": 45.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_76_0_map.gif",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.12
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_76_0.png",
      "width": 917,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.48,
   "yaw": 45.39,
   "distance": 50
  }
 ],
 "id": "overlay_D2F97380_C06E_E8F5_41E3_ADC016956F75",
 "data": {
  "label": "NANDED HIGHWAY"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.98,
   "yaw": -121.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_77_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.89
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_77_0.png",
      "width": 366,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.98,
   "yaw": -121.55,
   "distance": 50
  }
 ],
 "id": "overlay_D31E0624_C079_A83D_41D7_8434711FC1B8",
 "data": {
  "label": "JNTUH"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.91,
   "yaw": -121.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_78_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_78_0.png",
      "width": 365,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.91,
   "yaw": -121.67,
   "distance": 50
  }
 ],
 "id": "overlay_D12FF820_C07E_B836_41E2_39DAD747ADCF",
 "data": {
  "label": "1km"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.88,
   "yaw": -140.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_79_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.28
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_79_0.png",
      "width": 365,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.88,
   "yaw": -140.31,
   "distance": 50
  }
 ],
 "id": "overlay_D2F9ECF4_C069_B81E_41E0_9C8A772AFDDD",
 "data": {
  "label": "15km"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.78,
   "yaw": -98.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_80_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.37
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_80_0.png",
      "width": 465,
      "class": "ImageResourceLevel",
      "height": 239
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.78,
   "yaw": -98.89,
   "distance": 50
  }
 ],
 "id": "overlay_D1B4F1A2_C06A_E835_41CD_C4489DECC4DF",
 "data": {
  "label": "0.5km"
 },
 "rollOverDisplay": false
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D1D011E5_C069_A83F_41C5_C0C6D26439AB",
 "levels": [
  {
   "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D18AC1C6_C059_687D_41E3_011083D5B8B5",
 "levels": [
  {
   "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_69_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D1288832_C069_B815_41DB_D7A2D6215712",
 "levels": [
  {
   "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_71_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D1285832_C069_B815_41D4_EA2F01156FF9",
 "levels": [
  {
   "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_73_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D20CCD30_C06A_D815_41A4_08D8A2F8F05C",
 "levels": [
  {
   "url": "media/panorama_CB0EA0E7_C05B_A83B_41E0_5F5FD1E38C30_0_HS_75_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4
}],
 "vrPolyfillScale": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "defaultVRPointer": "laser",
 "borderRadius": 0,
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "borderSize": 0,
 "gap": 10,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "scripts": {
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } }
 },
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": "100%",
 "mouseWheelEnabled": false,
 "downloadEnabled": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Player465"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
