# from pytube import YouTube

# url = "https://www.youtube.com/watch?v=JylcA8Cjqes"

# video = YouTube(url)
# video = video.streams.get_highlight_resolutions()
# video.download()


from pytube import YouTube

# Enter the url of the video you want to download
url = "https://www.youtube.com/watch?v=MAM7mF2v7dE"

video = YouTube(url)

print(video.title)  # prints the title of the youtube video

# print(video.thumbnail_url)  # prints the link of the youtube thumbnail image

# print(video.views)  # prints the views of the video

# print(video.description)  # prints the description of the video

video = video.streams.get_highest_resolution()

video.download()
