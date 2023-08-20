from taipy.gui import Gui, notify

text = "LOL"
pageHTML = """
# Getting started with *Taipy*

My text: <|{text}|>

<|{text}|input|>


Sample text 1
<1|button|on_action=on_button1_action|>

Sample text 2
<2|button|on_action=on_button2_action|>
"""

def on_button_action(state):
    notify(state, '', f'The text is: {state.text}')
    state.text = "Button Pressed"



option = 1
def on_button1_action(state):
    option = 

Gui(page=pageHTML).run(use_reloader=True)