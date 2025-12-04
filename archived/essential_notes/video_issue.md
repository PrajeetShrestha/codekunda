Tasks done today:
- Mostly researched on video not playing issue in JBTV

Other tasks: 
- Fixed Preview in history and user purchases
- Fixed UI flickering issue of progress view in purchases using custom progressview
- Fixed layout for package preview


Findings for video only playing audio:

Color Space:
	• The video is using yuv420p10le, which is a 10-bit color depth. QuickTime may have issues with 10-bit color profiles. Converting to 8-bit (yuv420p) may help.


Using ffmpeg tool to convert the video in my device worked:

ffmpeg -i path/to/your/video.mp4 -c:v libx264 -preset fast -crf 22 -c:a aac -b:a 192k output_video.mp4


Conclusion: I think we need to put videos in server which are compatible with apple platforms. 

If our video doesn't play in QuickTime, it's likely that AVPlayerViewController which is the native component that we are using in our application, will also face issues due to shared codec support. Converting the video to H.264 and ensuring 8-bit color depth will give you the best compatibility across Apple devices and media players.
