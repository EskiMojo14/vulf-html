[Player]
Measure=Plugin
Plugin=GPPPlugin

[Cover]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=Cover
CoverPath=#@#Cover.png
UpdateDivider=10

[Track]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=Title
Substitute="":"N/A"
OnChangeAction=[!CommandMeasure SongGroup "[Track] | [Artist] | [Album] | [Duration] | [Cover]"]

[Artist]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=Artist
Substitute="":"N/A"

[Album]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=Album
Substitute="":"N/A"

[Duration]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=Duration
RegExpSubstitute=1
Substitute="^00":"0","^01":"1","^02":"2","^03":"3","^04":"4","^05":"5","^06":"6","^07":"7","^08":"8","^09":"9"

[Position]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=Position
RegExpSubstitute=1
Substitute="^00":"0","^01":"1","^02":"2","^03":"3","^04":"4","^05":"5","^06":"6","^07":"7","^08":"8","^09":"9"
OnChangeAction=[!CommandMeasure ProgressGroup "[Position]"]

[State]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=State
OnChangeAction=[!CommandMeasure Status "[State]"]

[CoverAbs]
Measure=Plugin
Plugin=GPPPlugin
PlayerInfo=CoverWebAddress
Substitute="":"#@#images\nocover.png"
DynamicVariables=1

