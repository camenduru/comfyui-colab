from subprocess import getoutput

class Terminal:
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"image": ("IMAGE",), "text": ("STRING", {"multiline": True})}}
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"
    def execute(self, image, command):
        out = getoutput(f"{command}")
        print(out)
        return image

    CATEGORY = "Tools"

NODE_CLASS_MAPPINGS = {
    "Terminal": Terminal
}