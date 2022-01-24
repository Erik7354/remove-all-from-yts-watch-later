# Remove all Videos from YouTubes Watch-later playlist

Is your Watch-later playlist also full of videos you added years ago and didn't remember once?
If the answer is yes, this script is for you!🙌🏼

I hope this little script will help you savie time!✔️

One notice: I made this in January 2022 so in case YouTube changes it's website this script might not work as intended anymore. No warranty for anything that happend because of that.🚫

## Usage

1. Open your browser developer tools
2. Go to console👨🏼‍💻
3. Either copy the two functions from functions.js or the whole content of functions.min.js and paste it into the console
4. Press Enter
5. Now decide if you want to remove all videos from your watch-later playlist or just some of the oldest videos.
   1. If you want to remove all, copy the while-loop from down below into your console and press enter
   2. If you want to only remove some of the oldest, copy the for-loop from down below into your console, replace X with the desired amount of videos and press enter
6. Wait and see your videos disappear✨

## Loops

### while-loop

``` js
// Use while if you want to remove every video from your watch-later playlist
while ((await removeFirstElement()) != "empty") {}
```

### for-loop

``` js
// Use for if you only want to remove the oldest X videos from your watch-later playlist
for (let i = 0; i < X; i++) { await removeFirstElement(); }
```
