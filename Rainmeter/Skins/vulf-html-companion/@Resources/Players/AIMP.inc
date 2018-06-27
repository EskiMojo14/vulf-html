[Player]
Measure=Plugin
Plugin=NowPlaying
PlayerName=AIMP
PlayerType=State

[Cover]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=Cover
UpdateDivider=10

[Track]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=TITLE
Substitute="":"N/A"
OnChangeAction=[!CommandMeasure SongGroup "[Track] | [Artist] | [Album] | [Duration] | [Cover]"]

[Artist]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=ARTIST
Substitute="":"N/A"

[Album]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=ALBUM
Substitute="":"N/A"

[Duration]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=Duration
RegExpSubstitute=1
Substitute="^00":"0","^01":"1","^02":"2","^03":"3","^04":"4","^05":"5","^06":"6","^07":"7","^08":"8","^09":"9"

[Position]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=Position
RegExpSubstitute=1
Substitute="^00":"0","^01":"1","^02":"2","^03":"3","^04":"4","^05":"5","^06":"6","^07":"7","^08":"8","^09":"9"
OnChangeAction=[!CommandMeasure ProgressGroup "[Position]"]

[State]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=State
OnChangeAction=[!CommandMeasure Status "[State]"]

[CoverAbs]
Measure=Plugin
Plugin=NowPlaying
PlayerName=[Player]
PlayerType=Cover
Substitute="":"#@#images\nocover.png"
UpdateDivider=50

