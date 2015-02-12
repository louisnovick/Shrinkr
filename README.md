# Shrinkr

Shrinkr leverages existing gulp modules to compress all of your images in bulk.  I recently utilized Shrinkr to minify folders consisting of 300+ photos that I needed compressed quickly. 

There are obviously many alternatives out there that get the job done just the same, but for me this was the most efficient way to accomplish this task.

## Installation

`npm install` or `sudo npm install`

## Usage

#####Place all images/image folders(containing images) to be compressed in /images

#####Run the `gulp` command from the root of Shrinkr

#####All images will be compressed and placed into /shrinkr.

Keep in mind that parent folders will be preserved when compression occurs.  I have not done much testing with compressing folders within the parent folder but I assume that to make this work all you would have to do is edit the gulp file to go down another level.  I will probably update Shrinkr to do this by default in the near future.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

For more information about gulp visit http://gulpjs.com/

Credit for the gulp-imagemin and gulp-pngquant modules go to https://github.com/kevva. Thanks!

## License

The MIT License (MIT)