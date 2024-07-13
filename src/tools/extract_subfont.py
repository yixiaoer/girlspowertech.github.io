import os
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter, Options


def subset_font(input_path, output_path, characters):
    font = TTFont(input_path)

    options = Options()
    options.desubroutinize = True

    subsetter = Subsetter(options=options)
    subsetter.populate(text=characters)

    subsetter.subset(font)

    font.save(output_path)


if __name__ == "__main__":
    input_path = os.path.join(os.path.dirname(__file__), "plexifont.ttf")
    output_path = os.path.join(os.path.dirname(__file__), "plexifont-subset.ttf")
    characters = "girlspowertechGIRLSPOWERTECH"

    subset_font(input_path, output_path, characters)
