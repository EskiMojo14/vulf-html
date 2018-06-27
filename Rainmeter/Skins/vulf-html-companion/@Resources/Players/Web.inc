[Player]
Measure=Plugin
Plugin=WebNowPlaying

[Cover]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Cover
CoverPath=#@#CoverWeb.png
UpdateDivider=10

[Track]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Title
Substitute="":"N/A"
OnChangeAction=[!CommandMeasure SongGroup "[Track] | [Artist] | [Album] | [Duration] | [Cover]"]

[Artist]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Artist
Substitute="":"N/A"

[Album]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Album
Substitute="":"N/A"

[Duration]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Duration
RegExpSubstitute=1
Substitute="^00":"0","^01":"1","^02":"2","^03":"3","^04":"4","^05":"5","^06":"6","^07":"7","^08":"8","^09":"9"

[Position]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=Position
RegExpSubstitute=1
Substitute="^00":"0","^01":"1","^02":"2","^03":"3","^04":"4","^05":"5","^06":"6","^07":"7","^08":"8","^09":"9"
OnChangeAction=[!CommandMeasure ProgressGroup "[Position]"]

[State]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=State
OnChangeAction=[!CommandMeasure Status "[State]"]

[CoverAbs]
Measure=Plugin
Plugin=WebNowPlaying
PlayerType=CoverWebAddress
Substitute="":"#@#images\nocover.png"

