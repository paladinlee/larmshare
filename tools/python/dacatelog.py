class da:
    def __init__(self,bookNum,bookName,title,page):
        self.bookNum=bookNum
        self.bookName=bookName
        self.title=title
        self.page=page
    
    def mk(self):
        vTmpName=self.bookName+'　　　　　　　　'
        
        vResult='{{ "id" : "book{}", "parent" : "a_4", "text" : "{}{} (p{})","icon":"glyphicon glyphicon-book","a_attr":{{"href":"https://larms.azurewebsites.net/da04.html?num={}"}} }},'.format(self.bookNum,vTmpName[:8],self.title,self.page,self.page)
        return vResult

pList=[]

'''
pList.append(da("411-2","","斷諸見品第十二","448"))
pList.append(da("411-3","","六到彼岸品第十三之一","455"))
pList.append(da("412","卷第四百一十二","六到彼岸品第十三之二","461"))
pList.append(da("412-2","","乘大乘品第十四","496"))
pList.append(da("413","卷第四百一十三","無縛解品第十五","503"))
'''
#
'''
pList.append(da("413-2","","三摩地品第十六之一","533"))
pList.append(da("414","卷第四百一十四","無縛解品第十六之二","545"))
pList.append(da("414-2","","念住等品第十七之一","571"))
pList.append(da("415","卷第四百一十五","念住等品第十七之二","589"))
pList.append(da("415-2","","修治地品第十八之一","609"))
pList.append(da("416","卷第四百一十六","修治地品第十八之二","629"))
pList.append(da("416-2","","出住品第十九之一","656"))
'''
#
'''
pList.append(da("417","卷第四百一十七","出住品第十九之二","671"))
pList.append(da("417-2","","超勝品第二十之一","694"))
pList.append(da("418","卷第四百一十八","超勝品第二十之二","713"))
pList.append(da("418-2","","無所有品第二十一之一","720"))
pList.append(da("419","卷第四百一十九","無所有品第二十一之二","753"))
'''
#
'''
pList.append(da("420","卷第四百二十","無所有品第二十一之三","793"))
pList.append(da("420-2","","隨順品第二十二","813"))
pList.append(da("420-3","","無邊際品第二十三之一","819"))
pList.append(da("421","卷第四百二十一","無邊際品第二十三之二","835"))
pList.append(da("422","卷第四百二十二","無邊際品第二十三之三","875"))
pList.append(da("423","卷第四百二十三","無邊際品第二十三之四","915"))
pList.append(da("423-2","","遠離品第二十四之一","936"))
pList.append(da("424","卷第四百二十四","無邊際品第二十四之二","953"))
pList.append(da("425","卷第四百二十五","帝釋品第二十五之一","991"))
pList.append(da("426","卷第四百二十六","帝釋品第二十五之二","1029"))
pList.append(da("426-2","","信受品第二十六","1033"))
pList.append(da("426-3","","散華品第二十七之一","1043"))
pList.append(da("427","卷第四百二十七","散華品第二十七之二","1069"))
pList.append(da("427-2","","授記品第二十八","1078"))
pList.append(da("427-3","","攝授品第二十九之一","1091"))
pList.append(da("428","卷第四百二十八","攝授品第二十九之二","1111"))
pList.append(da("428-2","","窣堵波品第三十","1118"))
pList.append(da("429","卷第四百二十九","福生品第三十一","1151"))
pList.append(da("429-2","","功德品第三十二","1154"))
pList.append(da("429-3","","外道品第三十三","1164"))
pList.append(da("429-4","","天來品第三十四之一","1171"))
pList.append(da("430","卷第四百三十","天來品第三十四之二","1191"))
pList.append(da("430-2","","設利羅品第三十五","1199"))
pList.append(da("431","卷第四百三十一","經文品第三十六之一","1235"))
pList.append(da("432","卷第四百三十二","經文品第三十六之二","1275"))
pList.append(da("432-2","","隨喜回向品第三十七之一","1294"))
'''
#第三冊
'''
pList.append(da("433","卷第四百三十三","隨喜回向品第三十七之二","1315"))
pList.append(da("434","卷第四百三十四","大師品第三十八","1353"))
pList.append(da("434-2","","地獄品第三十九之一","1386"))
pList.append(da("435","卷第四百三十五","地獄品第三十九之二","1393"))
pList.append(da("436","卷第四百三十六","清淨品第四十","1433"))
pList.append(da("436-2","","無標幟品第四十一之一","1462"))
pList.append(da("437","卷第四百三十七","無標幟品第四十一之二","1473"))
pList.append(da("437-2","","不可得品第四十二","1501"))
pList.append(da("438","卷第四百三十八","東北方品第四十三之一","1517"))
pList.append(da("439","卷第四百三十九","東北方品第四十三之二","1559"))
pList.append(da("440","卷第四百四十","東北方品第四十三之三","1579"))
pList.append(da("440-2","","魔事品第四十四","1603"))
pList.append(da("440-3","","不和合品第四十五之一","1623"))
pList.append(da("441","卷第四百四十一","不和合品第四十五之二","1635"))
pList.append(da("441-2","","佛母品第四十六之一","1662"))
pList.append(da("442","卷第四百四十二","佛母品第四十六之二","1675"))
pList.append(da("442-2","","示相品第四十七之一","1703"))
pList.append(da("443","卷第四百四十三","示相品第四十七之二","1715"))
pList.append(da("444","卷第四百四十四","成辦品第四十八","1757"))
pList.append(da("444-2","","船等喻品第四十九之一","1782"))
pList.append(da("445","卷第四百四十五","船等喻品第四十九之二","1797"))
pList.append(da("445-2","","初業品第五十之一","1806"))
pList.append(da("446","卷第四百四十六","初業品第五十之二","1835"))
pList.append(da("446-2","","調伏貪等品第五十一","1849"))
pList.append(da("446-3","","真如品第五十二之一","1864"))
pList.append(da("447","卷第四百四十七","真如品第五十二之二","1877"))
pList.append(da("448","卷第四百四十八","真如品第五十二之三","1917"))
pList.append(da("448-2","","不退轉品第五十三","1930"))
'''
#第四冊
pList.append(da("449","卷第四百四十九","轉不轉品第五十四","1959"))
pList.append(da("449-2","","甚深義品第五十五之一","1992"))
pList.append(da("450","卷第四百五十","甚深義品第五十五之二","1999"))
pList.append(da("451","卷第四百五十一","夢行品第五十六","2035"))
pList.append(da("451-2","","願行品第五十七","2041"))
pList.append(da("451-3","","殑伽天品第五十八","2067"))
pList.append(da("452","卷第四百五十二","習近品第五十九","2075"))
pList.append(da("452-2","","增上慢品第六十之一","2103"))
pList.append(da("453","卷第四百五十三","增上慢品第六十之二","2115"))
pList.append(da("454","卷第四百五十四","增上慢品第六十之三","2153"))
pList.append(da("454-2","","同學品第六十一之一","2178"))
pList.append(da("455","卷第四百五十五","同學品第六十一之二","2193"))
pList.append(da("455-2","","同性品第六十二之一","2214"))
pList.append(da("456","卷第四百五十六","同性品第六十二之二 ","2233"))
pList.append(da("456-2","","無分別品第六十三","2240"))
pList.append(da("456-3","","堅非堅品第六十四之一 ","2265"))
pList.append(da("457","卷第四百五十七","堅非堅品第六十四之二","2273"))
pList.append(da("457-2","","實語品第六十五之一","2303"))
pList.append(da("458","卷第四百五十八","實語品第六十五之二","2313"))
pList.append(da("458-2","","無盡品第六十六","2338"))
pList.append(da("459","卷第四百五十九","相攝品第六十七","2353"))
pList.append(da("460","卷第四百六十","巧便品第六十八之一","2393"))
pList.append(da("461","卷第四百六十一","巧便品第六十八之二","2435"))
pList.append(da("462","卷第四百六十二","巧便品第六十八之三","2475"))
pList.append(da("463","卷第四百六十三","巧便品第六十八之四","2515"))
pList.append(da("463-2","","樹喻品第六十九","2523"))
pList.append(da("464","卷第四百六十四","菩薩行品第七十","2553"))
pList.append(da("464-2","","親近品第七十一","2564"))
pList.append(da("464-3","","遍學品第七十二之一 ","2577"))


for x in pList:
    print(x.mk())
