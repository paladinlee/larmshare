class da:
    def __init__(self,bookNum,bookName,title,page):
        self.bookNum=bookNum
        self.bookName=bookName
        self.title=title
        self.page=page
    
    def mk(self):
        vTmpName=self.bookName+'　　　　　　　　'
        
        vResult='{{ "id" : "book{}", "parent" : "a_1", "text" : "{}{} (p{})","icon":"glyphicon glyphicon-book","a_attr":{{"href":"https://larms.azurewebsites.net/da01.html?num={}"}} }},'.format(self.bookNum,vTmpName[:8],self.title,self.page,self.page)
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
pList.append(da("413-2","","三摩地品第十六之一","533"))
pList.append(da("414","卷第四百一十四","無縛解品第十六之二","545"))
pList.append(da("414-2","","念住等品第十七之一","571"))
pList.append(da("415","卷第四百一十五","念住等品第十七之二","589"))
pList.append(da("415-2","","修治地品第十八之一","609"))
pList.append(da("416","卷第四百一十六","修治地品第十八之二","629"))
pList.append(da("416-2","","出住品第十九之一","656"))

for x in pList:
    print(x.mk())
