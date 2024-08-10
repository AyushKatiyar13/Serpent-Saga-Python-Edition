# from PIL import Image

# def remove_background(image_path, output_path, tolerance=200):
#     # Open the image file
#     img = Image.open(image_path)
    
#     # Convert image to RGBA (if not already)
#     img = img.convert("RGBA")
    
#     # Get the data of the image
#     data = img.getdata()
    
#     # Define the background color (white in this case)
#     background_color = (255, 255, 255, 255)  # RGBA value for white

#     # Create a new list for the image data
#     new_data = []
#     for item in data:
#         # Check if the color is close to white
#         if (abs(item[0] - background_color[0]) < tolerance and
#             abs(item[1] - background_color[1]) < tolerance and
#             abs(item[2] - background_color[2]) < tolerance):
#             new_data.append((255, 255, 255, 0))  # Transparent
#         else:
#             new_data.append(item)
    
#     # Update image data
#     img.putdata(new_data)
    
#     # Save the new image
#     img.save(output_path, "PNG")

# # Process both apple and mango images with a tolerance level
# remove_background("static/images/apple.png", "static/images/apple_no_bg.png")
# remove_background("static/images/mango.png", "static/images/mango_no_bg.png")






# from PIL import Image

# def remove_background(input_path, output_path):
#     with Image.open(input_path) as img:
#         img = img.convert("RGBA")
#         datas = img.getdata()

#         new_data = []
#         for item in datas:
#             # Change the background color condition based on your requirement
#             if item[0] in range(200, 256) and item[1] in range(200, 256) and item[2] in range(200, 256):
#                 new_data.append((0, 0, 0, 0))  # Set the background to transparent
#             else:
#                 new_data.append(item)

#         img.putdata(new_data)
#         img.save(output_path, "PNG")

# # Update these paths to match your actual image locations
# remove_background('static/images/snake-face.png', 'static/images/snake-face-no-bg.png')
# remove_background('static/images/snake-body.png', 'static/images/snake-body-no-bg.png')
