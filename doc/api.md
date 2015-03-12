### UA.shell

shell 的标志符。此标识符表示用户所用浏览器的外壳标识。 此处的外壳表示广义的外壳，即 IE, Firefox, Chrome, Opera, Safari 等浏览器都属于外壳。可以利用此标识符直接识别浏览器类型。 可以首先使用 UA.shell 返回的标识符判断当前浏览器类型，若需浏览器具体版本信息，可以再通过 UA[UA.shell] 取出版本号。 UA.core 返回字符串，目前支持 trident, webkit, gecko, presto 四大浏览器内核. 

[简单demo](http://runjs.cn/code/ufm4hltl)

### UA.core

core 的标志符。此标识符表示浏览器的内核标识。若浏览器内核不是 trident, webkit, gecko, presto 将返回空字符串。

### UA.mobile

mobile的标识符，若无法探测或非移动设备浏览器则返回空字符串

### UA.os

操作系统标示符，例如 window, android, ios, linux

### UA.android

安卓版本号，例如 5.0

### UA.ios

ios的版本号

### UA.ipad

iPad ios的版本号

### UA.iphone

iphone ios版本号

### UA.ipod

ipod ios版本号

### UA.chrome

chrome的版本号

### UA.firefox

firefox的版本号

### UA.ie

ie的版本号


### UA.opera

opera版本号


### UA.safari

safari版本号

### UA.webkit

webkit版本号

### UA.trident

trident 的版本号。IE 浏览器 8 系列以下都无法准确探测 Trident 内核的版本号。

### UA.gecko

gecko的版本号

### UA.presto

presto的版本号