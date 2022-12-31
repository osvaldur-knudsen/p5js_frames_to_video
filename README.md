# p5js_frames_to_video
Code to get p5js animations to a video format.

This code is based on description here: https://www.youtube.com/watch?v=bVlIFf-hffY

The code will produce webm video file which will be added to downloads folder. Then, from 
command line we can do this:

ffmpeg -i movie.webm output.mp4

... and produce an mp4 file.
