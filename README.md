# 🏮 Luxy - a DMX playground

A fun experiment in Node and Typescript fueled by taking one look at [`dmx-ts`](https://github.com/node-dmx/dmx-ts) and wanting to make my live show lighting scenes more streamlined and interesting.

## 🥪 Background for why I'm working on this

1. I've got a Sumger RGBW DMX laser unit that I use for visuals at [Reset](https://instagram.com/reset_presents) shows and I haven't been able to squeeze the full potential out of it with software like [LightKey](https://lightkeyapp.com/).
2. We've got a ton of DMX fixtures at the Reset venue which I'd love to orchestrate together with creative animations using my DMXking USB interface.
3. Setting up a complex DMX universe in existing GUI DMX programs became unintuitive & cost prohibitive, so I wanna learn everything from the ground up and build my own DMX controller along the way

## 🔨 Contributing

You know what's up:

```
pnpm install
```

You'll need a USB DMX interface and a DMX-controllable lighting fixture. If you're running something other than a DMXking interface, you may need to tweak the related `interfacePort` and `driver` config in the `index.ts` file. Refer to [`dmx-ts`](https://github.com/node-dmx/dmx-ts) for more info there. The next step will also help you identify your interface if you're uncertain.

Once situated equipment-wise, this will pull your plugged-in devices into a `port.json` file:

```
pnpm prestart
```

The program then reads from that file and runs your dev server, outputting DMX commands to your interface:

```
pnpm start
```

When you're done, this script removes your `port.js` file:

```
pnpm poststart
```
