(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(98)),o={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},l={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Getting Started: in 4 simple steps",source:"@site/docs/getting_started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"A Bluetooth First Firmware",permalink:"/docs/bluetooth_firmware"}},c=[{value:"Getting Started: in 4 simple steps",id:"getting-started-in-4-simple-steps",children:[{value:"Step 1: Option 1 - Install Arduino IDE",id:"step-1-option-1---install-arduino-ide",children:[]},{value:"Step 1: Option 2 - Install Arduino CLI (Windows script)",id:"step-1-option-2---install-arduino-cli-windows-script",children:[]},{value:"Step 2: Download BlueMicro_BLE Firmware",id:"step-2-download-bluemicro_ble-firmware",children:[]},{value:"Step 3: Edit 4 Keyboard Files",id:"step-3-edit-4-keyboard-files",children:[]},{value:"Step 4: Compile and Upload",id:"step-4-compile-and-upload",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"getting-started-in-4-simple-steps"},"Getting Started: in 4 simple steps"),Object(i.b)("p",null,"Getting started with "),Object(i.b)("h3",{id:"step-1-option-1---install-arduino-ide"},"Step 1: Option 1 - Install Arduino IDE"),Object(i.b)("iframe",{width:"572",height:"320",src:"https://www.youtube.com/embed/0skX6HPSZnU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Watch the video above to see how to install the Arduino IDE and get the library needed (it's all manual)."),Object(i.b)("p",null,"These are the steps followed in the video (Original Instructions by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/arduino-bsp-setup"}),"Adafruit"),"):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download and install the Arduino IDE (At least v1.8). Download it from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.arduino.cc/en/Main/Software"}),"here"),". Do not install it from the App Store."),Object(i.b)("li",{parentName:"ul"},"Start the Arduino IDE"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"https://www.adafruit.com/package_adafruit_index.json")," as an ",Object(i.b)("strong",{parentName:"li"},"Additional Board Manager URL")," (see image below)\n",Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/040/294/large1024/microcontrollers_Screen_Shot_2017-03-19_at_22.16.49.png",alt:"Board Manager"}))),Object(i.b)("li",{parentName:"ul"},"Open the ",Object(i.b)("strong",{parentName:"li"},"Boards Manager")," option from the ",Object(i.b)("strong",{parentName:"li"},"Tools -> Board")," menu and install ",Object(i.b)("inlineCode",{parentName:"li"},"Adafruit nRF52 by Adafruit")," (see image below)\n",Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/039/907/large1024/microcontrollers_nRF52BSP.png?1488964156",alt:"Board Manager"})))),Object(i.b)("p",null,"It will take up to a few minutes to finish installing the cross-compiling toolchain and tools associated with this BSP."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The delay during the installation stage shown in the image below is normal"),", please be patient and let the installation terminate normally:\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/040/938/large1024/microcontrollers_Screen_Shot_2017-04-19_at_20.23.20.png",alt:"Board Manager install progress"}))),Object(i.b)("p",null,"Once the BSP is installed, select the relevant board from the ",Object(i.b)("strong",{parentName:"p"},"Tools -> Board")," menu, which will update your system config to use the right compiler and settings for your nRF52 board:\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/094/506/large1024/microcontrollers_image.png?1598977463",alt:"Board Selection"}))),Object(i.b)("h3",{id:"step-1-option-2---install-arduino-cli-windows-script"},"Step 1: Option 2 - Install Arduino CLI (Windows script)"),Object(i.b)("iframe",{width:"572",height:"320",src:"https://www.youtube.com/embed/kJOem90845Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Watch the video above to see how to install the Arduino CLI and automatically get the library needed (it's in the script).",Object(i.b)("br",{parentName:"p"}),"\n","The script follows these steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download the arduino-cli using the steps outlined ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://arduino.github.io/arduino-cli/latest/installation/"}),"here")),Object(i.b)("li",{parentName:"ul"},"Review the version installed ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli version")),Object(i.b)("li",{parentName:"ul"},"Add the configuration file ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli.yaml")," to the same folder where you have installed the executable binary for the arduino-cli.  This file contains the additional Boards Manager URLs. It's located in the utils folder of the firmware."),Object(i.b)("li",{parentName:"ul"},"Updates the index of cores from the added Boards Manager URLs: ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli core update-index")),Object(i.b)("li",{parentName:"ul"},"Upgrade all installed platforms to the latest version: ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli core upgrade")),Object(i.b)("li",{parentName:"ul"},"Make sure that the nRF52 Board Support Packages can be found: ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli core search nrf52")),Object(i.b)("li",{parentName:"ul"},"Install the Adafruit nRF52 Board Support Package by running: ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli core install adafruit:nrf52")),Object(i.b)("li",{parentName:"ul"},"Install the Community nRF52 Board Support Package by running: ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli core install community_nrf52:nrf52")),Object(i.b)("li",{parentName:"ul"},"Verify that the nRF52 boards were installed: ",Object(i.b)("inlineCode",{parentName:"li"},"arduino-cli board listall"))),Object(i.b)("h3",{id:"step-2-download-bluemicro_ble-firmware"},"Step 2: Download BlueMicro_BLE Firmware"),Object(i.b)("iframe",{width:"572",height:"320",src:"https://www.youtube.com/embed/eKDoVYfXWYQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"To get a copy of the firmware, you have 3 options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/archive/master.zip"}),"zip file")," of the master branch of the repository."),Object(i.b)("li",{parentName:"ul"},"Clone the repository localy  ",Object(i.b)("inlineCode",{parentName:"li"},"git clone https://github.com/jpconstantineau/BlueMicro_BLE.git")),Object(i.b)("li",{parentName:"ul"},"Fork the repo and clone locally.  If you want to save your changes and contribute back to the project, you will need to opt for this method.")),Object(i.b)("p",null,"Simplest is just to download the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/archive/master.zip"}),"zip file"),".  In the video, I show the first 2 methods."),Object(i.b)("h3",{id:"step-3-edit-4-keyboard-files"},"Step 3: Edit 4 Keyboard Files"),Object(i.b)("iframe",{width:"572",height:"320",src:"https://www.youtube.com/embed/AjT15clmnmw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Open the firmware in the IDE or your favorite editor, edit the following 4 files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hardware_config.h:")," for the GPIO definition of your keyboard. This file will vary depending on the controller you select."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"keyboard_config.h:")," for the BLE definition of your keyboard"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"keymap.cpp:")," for the keymaps definitions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"keymap.h:")," to support the keymaps definitions")),Object(i.b)("p",null,"For more details on configuring your keyboard, look here..."),Object(i.b)("h3",{id:"step-4-compile-and-upload"},"Step 4: Compile and Upload"),Object(i.b)("iframe",{width:"572",height:"320",src:"https://www.youtube.com/embed/kJOem90845Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Video presents the Arduino-cli method."),Object(i.b)("p",null,"If you use the Arduino IDE, follow these steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Select appropriate "Board" in the "Tools" menu'),Object(i.b)("li",{parentName:"ul"},"Compile"),Object(i.b)("li",{parentName:"ul"},"Connect your keyboard with USB cable"),Object(i.b)("li",{parentName:"ul"},'Select apropriate serial "Port" in the "Tools" menu'),Object(i.b)("li",{parentName:"ul"},"Upload - Depending on your hardware/firmware, you may need to double-press reset to put it in DFU mode"),Object(i.b)("li",{parentName:"ul"},'Go to your computer\'s Bluetooth connections and "add device"'),Object(i.b)("li",{parentName:"ul"},"You should be able to pair your keyboard")))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);