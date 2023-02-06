var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/styles.js
var require_styles = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/styles.js"(exports, module) {
    var styles = {};
    module["exports"] = styles;
    var codes = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      brightRed: [91, 39],
      brightGreen: [92, 39],
      brightYellow: [93, 39],
      brightBlue: [94, 39],
      brightMagenta: [95, 39],
      brightCyan: [96, 39],
      brightWhite: [97, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgBrightRed: [101, 49],
      bgBrightGreen: [102, 49],
      bgBrightYellow: [103, 49],
      bgBrightBlue: [104, 49],
      bgBrightMagenta: [105, 49],
      bgBrightCyan: [106, 49],
      bgBrightWhite: [107, 49],
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49]
    };
    Object.keys(codes).forEach(function(key) {
      var val = codes[key];
      var style = styles[key] = [];
      style.open = "\x1B[" + val[0] + "m";
      style.close = "\x1B[" + val[1] + "m";
    });
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/system/has-flag.js
var require_has_flag = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/system/has-flag.js"(exports, module) {
    "use strict";
    module.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^-{1,2}/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/system/supports-colors.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor = void 0;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      var min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        var osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
          return sign in env;
        }) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TERM_PROGRAM" in env) {
        var version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Hyper":
            return 3;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      var level = supportsColor(stream);
      return translateLevel(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/custom/trap.js
var require_trap = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/custom/trap.js"(exports, module) {
    module["exports"] = function runTheTrap(text, options) {
      var result = "";
      text = text || "Run the trap, drop the bass";
      text = text.split("");
      var trap = {
        a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
        b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
        c: ["\xA9", "\u023B", "\u03FE"],
        d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
        e: [
          "\xCB",
          "\u0115",
          "\u018E",
          "\u0258",
          "\u03A3",
          "\u03BE",
          "\u04BC",
          "\u0A6C"
        ],
        f: ["\u04FA"],
        g: ["\u0262"],
        h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
        i: ["\u0F0F"],
        j: ["\u0134"],
        k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
        l: ["\u0139"],
        m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
        n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
        o: [
          "\xD8",
          "\xF5",
          "\xF8",
          "\u01FE",
          "\u0298",
          "\u047A",
          "\u05DD",
          "\u06DD",
          "\u0E4F"
        ],
        p: ["\u01F7", "\u048E"],
        q: ["\u09CD"],
        r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
        s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
        t: ["\u0141", "\u0166", "\u0373"],
        u: ["\u01B1", "\u054D"],
        v: ["\u05D8"],
        w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
        x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
        y: ["\xA5", "\u04B0", "\u04CB"],
        z: ["\u01B5", "\u0240"]
      };
      text.forEach(function(c) {
        c = c.toLowerCase();
        var chars = trap[c] || [" "];
        var rand = Math.floor(Math.random() * chars.length);
        if (typeof trap[c] !== "undefined") {
          result += trap[c][rand];
        } else {
          result += c;
        }
      });
      return result;
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/custom/zalgo.js"(exports, module) {
    module["exports"] = function zalgo(text, options) {
      text = text || "   he is here   ";
      var soul = {
        "up": [
          "\u030D",
          "\u030E",
          "\u0304",
          "\u0305",
          "\u033F",
          "\u0311",
          "\u0306",
          "\u0310",
          "\u0352",
          "\u0357",
          "\u0351",
          "\u0307",
          "\u0308",
          "\u030A",
          "\u0342",
          "\u0313",
          "\u0308",
          "\u034A",
          "\u034B",
          "\u034C",
          "\u0303",
          "\u0302",
          "\u030C",
          "\u0350",
          "\u0300",
          "\u0301",
          "\u030B",
          "\u030F",
          "\u0312",
          "\u0313",
          "\u0314",
          "\u033D",
          "\u0309",
          "\u0363",
          "\u0364",
          "\u0365",
          "\u0366",
          "\u0367",
          "\u0368",
          "\u0369",
          "\u036A",
          "\u036B",
          "\u036C",
          "\u036D",
          "\u036E",
          "\u036F",
          "\u033E",
          "\u035B",
          "\u0346",
          "\u031A"
        ],
        "down": [
          "\u0316",
          "\u0317",
          "\u0318",
          "\u0319",
          "\u031C",
          "\u031D",
          "\u031E",
          "\u031F",
          "\u0320",
          "\u0324",
          "\u0325",
          "\u0326",
          "\u0329",
          "\u032A",
          "\u032B",
          "\u032C",
          "\u032D",
          "\u032E",
          "\u032F",
          "\u0330",
          "\u0331",
          "\u0332",
          "\u0333",
          "\u0339",
          "\u033A",
          "\u033B",
          "\u033C",
          "\u0345",
          "\u0347",
          "\u0348",
          "\u0349",
          "\u034D",
          "\u034E",
          "\u0353",
          "\u0354",
          "\u0355",
          "\u0356",
          "\u0359",
          "\u035A",
          "\u0323"
        ],
        "mid": [
          "\u0315",
          "\u031B",
          "\u0300",
          "\u0301",
          "\u0358",
          "\u0321",
          "\u0322",
          "\u0327",
          "\u0328",
          "\u0334",
          "\u0335",
          "\u0336",
          "\u035C",
          "\u035D",
          "\u035E",
          "\u035F",
          "\u0360",
          "\u0362",
          "\u0338",
          "\u0337",
          "\u0361",
          " \u0489"
        ]
      };
      var all = [].concat(soul.up, soul.down, soul.mid);
      function randomNumber(range) {
        var r = Math.floor(Math.random() * range);
        return r;
      }
      function isChar(character) {
        var bool = false;
        all.filter(function(i) {
          bool = i === character;
        });
        return bool;
      }
      function heComes(text2, options2) {
        var result = "";
        var counts;
        var l;
        options2 = options2 || {};
        options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
        options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
        options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
        options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
        text2 = text2.split("");
        for (l in text2) {
          if (isChar(l)) {
            continue;
          }
          result = result + text2[l];
          counts = { "up": 0, "down": 0, "mid": 0 };
          switch (options2.size) {
            case "mini":
              counts.up = randomNumber(8);
              counts.mid = randomNumber(2);
              counts.down = randomNumber(8);
              break;
            case "maxi":
              counts.up = randomNumber(16) + 3;
              counts.mid = randomNumber(4) + 1;
              counts.down = randomNumber(64) + 3;
              break;
            default:
              counts.up = randomNumber(8) + 1;
              counts.mid = randomNumber(6) / 2;
              counts.down = randomNumber(8) + 1;
              break;
          }
          var arr = ["up", "mid", "down"];
          for (var d in arr) {
            var index = arr[d];
            for (var i = 0; i <= counts[index]; i++) {
              if (options2[index]) {
                result = result + soul[index][randomNumber(soul[index].length)];
              }
            }
          }
        }
        return result;
      }
      return heComes(text, options);
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/america.js
var require_america = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/america.js"(exports, module) {
    module["exports"] = function(colors) {
      return function(letter, i, exploded) {
        if (letter === " ")
          return letter;
        switch (i % 3) {
          case 0:
            return colors.red(letter);
          case 1:
            return colors.white(letter);
          case 2:
            return colors.blue(letter);
        }
      };
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/zebra.js
var require_zebra = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/zebra.js"(exports, module) {
    module["exports"] = function(colors) {
      return function(letter, i, exploded) {
        return i % 2 === 0 ? letter : colors.inverse(letter);
      };
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/rainbow.js"(exports, module) {
    module["exports"] = function(colors) {
      var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
      return function(letter, i, exploded) {
        if (letter === " ") {
          return letter;
        } else {
          return colors[rainbowColors[i++ % rainbowColors.length]](letter);
        }
      };
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/random.js
var require_random = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/maps/random.js"(exports, module) {
    module["exports"] = function(colors) {
      var available = [
        "underline",
        "inverse",
        "grey",
        "yellow",
        "red",
        "green",
        "blue",
        "white",
        "cyan",
        "magenta",
        "brightYellow",
        "brightRed",
        "brightGreen",
        "brightBlue",
        "brightWhite",
        "brightCyan",
        "brightMagenta"
      ];
      return function(letter, i, exploded) {
        return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
      };
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/colors.js
var require_colors = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/colors.js"(exports, module) {
    var colors = {};
    module["exports"] = colors;
    colors.themes = {};
    var util = __require("util");
    var ansiStyles = colors.styles = require_styles();
    var defineProps = Object.defineProperties;
    var newLineRegex = new RegExp(/[\r\n]+/g);
    colors.supportsColor = require_supports_colors().supportsColor;
    if (typeof colors.enabled === "undefined") {
      colors.enabled = colors.supportsColor() !== false;
    }
    colors.enable = function() {
      colors.enabled = true;
    };
    colors.disable = function() {
      colors.enabled = false;
    };
    colors.stripColors = colors.strip = function(str) {
      return ("" + str).replace(/\x1B\[\d+m/g, "");
    };
    var stylize = colors.stylize = function stylize2(str, style) {
      if (!colors.enabled) {
        return str + "";
      }
      var styleMap = ansiStyles[style];
      if (!styleMap && style in colors) {
        return colors[style](str);
      }
      return styleMap.open + str + styleMap.close;
    };
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    var escapeStringRegexp = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
    function build(_styles) {
      var builder = function builder2() {
        return applyStyle.apply(builder2, arguments);
      };
      builder._styles = _styles;
      builder.__proto__ = proto;
      return builder;
    }
    var styles = function() {
      var ret = {};
      ansiStyles.grey = ansiStyles.gray;
      Object.keys(ansiStyles).forEach(function(key) {
        ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
        ret[key] = {
          get: function() {
            return build(this._styles.concat(key));
          }
        };
      });
      return ret;
    }();
    var proto = defineProps(function colors2() {
    }, styles);
    function applyStyle() {
      var args = Array.prototype.slice.call(arguments);
      var str = args.map(function(arg) {
        if (arg != null && arg.constructor === String) {
          return arg;
        } else {
          return util.inspect(arg);
        }
      }).join(" ");
      if (!colors.enabled || !str) {
        return str;
      }
      var newLinesPresent = str.indexOf("\n") != -1;
      var nestedStyles = this._styles;
      var i = nestedStyles.length;
      while (i--) {
        var code = ansiStyles[nestedStyles[i]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        if (newLinesPresent) {
          str = str.replace(newLineRegex, function(match) {
            return code.close + match + code.open;
          });
        }
      }
      return str;
    }
    colors.setTheme = function(theme) {
      if (typeof theme === "string") {
        console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        return;
      }
      for (var style in theme) {
        (function(style2) {
          colors[style2] = function(str) {
            if (typeof theme[style2] === "object") {
              var out = str;
              for (var i in theme[style2]) {
                out = colors[theme[style2][i]](out);
              }
              return out;
            }
            return colors[theme[style2]](str);
          };
        })(style);
      }
    };
    function init() {
      var ret = {};
      Object.keys(styles).forEach(function(name) {
        ret[name] = {
          get: function() {
            return build([name]);
          }
        };
      });
      return ret;
    }
    var sequencer = function sequencer2(map2, str) {
      var exploded = str.split("");
      exploded = exploded.map(map2);
      return exploded.join("");
    };
    colors.trap = require_trap();
    colors.zalgo = require_zalgo();
    colors.maps = {};
    colors.maps.america = require_america()(colors);
    colors.maps.zebra = require_zebra()(colors);
    colors.maps.rainbow = require_rainbow()(colors);
    colors.maps.random = require_random()(colors);
    for (map in colors.maps) {
      (function(map2) {
        colors[map2] = function(str) {
          return sequencer(colors.maps[map2], str);
        };
      })(map);
    }
    var map;
    defineProps(colors, init());
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/extendStringPrototype.js
var require_extendStringPrototype = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/extendStringPrototype.js"(exports, module) {
    var colors = require_colors();
    module["exports"] = function() {
      var addProperty = function(color, func) {
        String.prototype.__defineGetter__(color, func);
      };
      addProperty("strip", function() {
        return colors.strip(this);
      });
      addProperty("stripColors", function() {
        return colors.strip(this);
      });
      addProperty("trap", function() {
        return colors.trap(this);
      });
      addProperty("zalgo", function() {
        return colors.zalgo(this);
      });
      addProperty("zebra", function() {
        return colors.zebra(this);
      });
      addProperty("rainbow", function() {
        return colors.rainbow(this);
      });
      addProperty("random", function() {
        return colors.random(this);
      });
      addProperty("america", function() {
        return colors.america(this);
      });
      var x = Object.keys(colors.styles);
      x.forEach(function(style) {
        addProperty(style, function() {
          return colors.stylize(this, style);
        });
      });
      function applyTheme(theme) {
        var stringPrototypeBlacklist = [
          "__defineGetter__",
          "__defineSetter__",
          "__lookupGetter__",
          "__lookupSetter__",
          "charAt",
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
          "charCodeAt",
          "indexOf",
          "lastIndexOf",
          "length",
          "localeCompare",
          "match",
          "repeat",
          "replace",
          "search",
          "slice",
          "split",
          "substring",
          "toLocaleLowerCase",
          "toLocaleUpperCase",
          "toLowerCase",
          "toUpperCase",
          "trim",
          "trimLeft",
          "trimRight"
        ];
        Object.keys(theme).forEach(function(prop) {
          if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
            console.log("warn: ".red + ("String.prototype" + prop).magenta + " is probably something you don't want to override.  Ignoring style name");
          } else {
            if (typeof theme[prop] === "string") {
              colors[prop] = colors[theme[prop]];
              addProperty(prop, function() {
                return colors[prop](this);
              });
            } else {
              var themePropApplicator = function(str) {
                var ret = str || this;
                for (var t = 0; t < theme[prop].length; t++) {
                  ret = colors[theme[prop][t]](ret);
                }
                return ret;
              };
              addProperty(prop, themePropApplicator);
              colors[prop] = function(str) {
                return themePropApplicator(str);
              };
            }
          }
        });
      }
      colors.setTheme = function(theme) {
        if (typeof theme === "string") {
          console.log("colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
          return;
        } else {
          applyTheme(theme);
        }
      };
    };
  }
});

// ../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/colors@1.4.0/node_modules/colors/lib/index.js"(exports, module) {
    var colors = require_colors();
    module["exports"] = colors;
    require_extendStringPrototype()();
  }
});

// index.ts
import enquirer from "enquirer";

// src/utils/logger.ts
var logger_exports = {};
__export(logger_exports, {
  base: () => base,
  error: () => error,
  info: () => info,
  success: () => success,
  warn: () => warn
});
var import_colors = __toESM(require_lib(), 1);
var warn = (info2) => {
  console.log(`[warn] ${info2}`.yellow);
};
var error = (info2) => {
  console.log(`[error] ${info2}`.red);
};
var info = (info2) => {
  console.log(`[info] ${info2}`.cyan);
};
var success = (info2) => {
  console.log(`[success] ${info2}`.green);
};
var base = (info2) => {
  console.log(info2);
};

// src/run.ts
import { incoming, initWsConnect, parseLiveUrl } from "@liou666/live-parser-core";

// src/handler.ts
function handleChatMessage(data) {
  const { user: { nickName, gender }, content } = data;
  logger_exports.base(`\u3010\u{1F4E8}\u5F39\u5E55\u3011 ${nickName}: ${content}`.green);
  return data;
}
function handleCommonTextMessage(data) {
  return data;
}
function handleUpdateFanTicketMessage(data) {
  return data;
}
function handleRoomUserSeqMessage(data) {
  return data;
}
function handleSocialMessage(data) {
  const { user: { nickName, gender } } = data;
  logger_exports.base(`\u3010\u2795\u5173\u6CE8\u3011${nickName} \u5173\u6CE8\u4E86\u4E3B\u64AD`.red);
  return data;
}
function handleGiftMessage(data) {
  const { common: { describe }, user: { nickName } } = data;
  logger_exports.base(`\u3010\u{1F381}\u793C\u7269\u3011${describe}`.yellow);
  return data;
}
function handleMemberMessage(data) {
  const { user: { nickName, gender }, memberCount: { low } } = data;
  logger_exports.base(`\u3010\u{1F3E0}\u8FDB\u623F\u3011${nickName} \u8FDB\u5165\u4E86\u76F4\u64AD\u95F4\uFF0C\u5F53\u524D\u4EBA\u6570\uFF1A${String(low + 1)}`);
  return data;
}
function handleLikeMessage(data) {
  const { user: { nickName, gender }, count, total } = data;
  logger_exports.base(`\u3010\u{1F44D}\u70B9\u8D5E\u3011${nickName} \u70B9\u8D5E\u4E86${String(count.low)}\u6B21\uFF0C\u76F4\u64AD\u95F4\u70B9\u8D5E\u603B\u6570\uFF1A${String(total.low + count.low)}`);
  return data;
}
function handleMatchAgainstScoreMessage(data) {
  return data;
}

// src/run.ts
var startWebsocket = async (liveId) => {
  const { ttwid, liveRoomId } = await parseLiveUrl(liveId);
  let timer;
  const ws = await initWsConnect({ ttwid, liveRoomId });
  ws.binaryType = "arraybuffer";
  ws.onopen = () => {
    timer = setInterval(() => {
    }, 1e4);
    logger_exports.info("connected");
  };
  ws.onclose = () => {
    clearInterval(timer);
    logger_exports.warn("disconnected");
  };
  ws.onerror = (err) => logger_exports.error(String(err));
  ws.onmessage = (data) => incoming(data, ws, {
    handleChatMessage,
    handleCommonTextMessage,
    handleGiftMessage,
    handleLikeMessage,
    handleMatchAgainstScoreMessage,
    handleMemberMessage,
    handleRoomUserSeqMessage,
    handleSocialMessage,
    handleUpdateFanTicketMessage
  });
};
var run_default = startWebsocket;

// index.ts
var { prompt } = enquirer;
var response = await prompt({
  type: "input",
  name: "liveID",
  message: "\u8F93\u5165\u6296\u97F3\u76F4\u64AD\u95F4ID?"
});
run_default(response.liveID);
process.on("SIGINT", () => {
  logger_exports.error("Server stopped.");
  process.exit();
});
process.on("SIGTERM", () => {
  logger_exports.error("Server stopped.");
  process.exit();
});
process.on("unhandledRejection", (reason, promise) => {
  logger_exports.warn(`Unhandled Rejection at: ${promise}; reason:, ${reason}`);
});
process.on("uncaughtException", (err, origin) => {
  logger_exports.warn(`Caught exception: ${err}
Exception origin: ${origin}`);
});
//# sourceMappingURL=index.js.map