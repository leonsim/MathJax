/*
 *  /MathJax/config/TeX-AMS_HTML.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Config({TeX:{Augment:{Definitions:{macros:{overparen:["UnderOver","23DC"],underparen:["UnderOver","23DD"]}}}},extensions:["tex2jax.js","MathEvents.js","MathZoom.js","MathMenu.js","toMathML.js","TeX/noErrors.js","TeX/noUndefined.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],jax:["input/TeX","output/HTML-CSS"],"HTML-CSS":{linebreaks:{automatic:true,width:"container"}}});MathJax.Ajax.loadComplete("[MathJax]/config/TeX-AMS_HTML.js");
