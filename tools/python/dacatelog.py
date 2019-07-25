class da:
    def __init__(self,bookNum,bookName,title,page):
        self.bookNum=bookNum
        self.bookName=bookName
        self.title=title
        self.page=page
    
    def mk(self):
        vTmpName=self.bookName+'　　　　　　　　'
        
        vResult='{{ "id" : "book{}", "parent" : "a_2", "text" : "{}{} (p{})","icon":"glyphicon glyphicon-book","a_attr":{{"href":"https://larms.azurewebsites.net/da02.html?num={}"}} }},'.format(self.bookNum,vTmpName[:8],self.title,self.page,self.page)
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
#
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

for x in pList:
    print(x.mk())
