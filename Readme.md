[![npm(scoped)](https://img.shields.io/npm/v/@lichin/pico.svg)](https://github.com/lichin-lin/pico)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@lichin/pico.svg)](https://github.com/lichin-lin/pico)

<h3 align="center">
  An experimental animation<br>library for React on the web.
</h3>
<br>

## Get started

### Quick start

```
npm install @lichin/pico
```

```jsx
import React from "react";
import { animate } from "@lichin/pico";

export default function App() {
  const handleRotate = () => {
    const elm = document.querySelector(".image");
    animate(elm, {
      rotate: 90,
      transition: {
        duration: 0.4
      }
    });
  };

  return (
    <div className="App">
      <img
        onClick={handleRotate}
        src="https://miro.medium.com/max/1400/1*UktO9Cqfa_M7gv3syxCjRg.jpeg"
        alt="doggy"
        className="image"
      />
    </div>
  );
}
```
### Demo
you can play with it through [codesandbox example](https://codesandbox.io/s/pico-sspzc?file=/src/App.js)
### Docs
**Animate API**
<br />
Animate function contain two parameter:
<br />
| Prop | Type | Default | Description |
| -------- | -------- | -------- | ---------------------------------------------------- |
| element  | HTMLElement Object | -             | Single HTMLElement Object |
| options  | Object             | {}            | Please see next object description for the details |

options object contain two type of keys:
| Key | Type | Default | Description |
| --------   | -------- | -------- | ---------------------------------------------------- |
| transition | Object   | -        | Describe how the animation should play, currently support `duration: Number` |
| rotate     | Number   | -        | The value that the element should rotate |

## License

Pico is MIT licensed.
