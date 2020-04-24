[![npm(scoped)](https://img.shields.io/npm/v/@lichin/pico.svg)](https://github.com/lichin-lin/pico)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@lichin/pico.svg)](https://github.com/lichin-lin/pico)

<h3 align="center">
  An experimental photo editor<br>library for the web.
</h3>
<br>

## Get started

### Quick start

```
npm install @lichin/pico
```

```jsx
import React, { useEffect } from "react";
import { pico } from "./pico";
import "./styles.css";

export default function App() {
  const handleRotate = deg => {
    const elm = document.querySelector("#canvas");
    pico(elm, {
      rotate: deg
    });
  };
  useEffect(() => {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    let img = document.getElementById("source");
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 800, 600);
    };
  }, []);
  return (
    <div className="App">
      <div className="btns">
        <div className="btn rotate-90-pos" onClick={() => handleRotate(-90)}>
          rotate -90deg
        </div>
        <div className="btn rotate-90-neg" onClick={() => handleRotate(90)}>
          rotate 90deg
        </div>
      </div>

      <div className="board">
        <canvas id="canvas" width="800" height="600" />
      </div>
      <div className="board hide">
        <img
          id="source"
          crossOrigin="Anonymous"
          src="https://miro.medium.com/max/1400/1*UktO9Cqfa_M7gv3syxCjRg.jpeg"
          alt="doggy"
        />
      </div>
    </div>
  );
}
```
### Demo
you can play with it through [codesandbox example](https://codesandbox.io/s/pico-sspzc?file=/src/App.js)
### Docs
**Pico API**
<br />
Animate function contain two parameter:
<br />
| Prop | Type | Default | Description |
| -------- | -------- | -------- | ---------------------------------------------------- |
| element  | HTMLElement Object | -             | Single HTMLElement `CANVAS` Object |
| options  | Object             | {}            | Please see next object description for the details |

options object contain several keys (In progress):
| Key | Type | Default | Description |
| --------   | -------- | -------- | ---------------------------------------------------- |
| rotate     | Number   | -        | The value that the element should rotate |

## License

Pico is MIT licensed.
