
# Cucumber and Puppeteer

Cucumber, Behaviour-Driven Development (BDD) destekleyen bir araçtır. İlk olarak BDD nedir sorusuna cevap verelim.

BDD, yazılım geliştirme süreci içerisinde senaryo tabanlı bir geliştirme sistemidir. Bir projeyi geliştirirken sac ayakları olarak 3 ana unsuru yani PO, QA ve Developer üçgenini düşünelim. Bu 3 grup geliştirme sürecine dair her şeyi tartışır ve bir sonuca bağlarlar. Geliştirilecek olan iş parçacığı senaryoya dökülür. Sonrasında senaryoya dökülen bu iş geliştirme sürecine tabi tutulur. Tam bu noktada senaryo tabanlı BDD sürecini destekleyen Cucumber aramıza dahil olur.

Ne demiştik? PO, QA ve Developer aşağıdaki 3 unsur ile ortaya bir iş parçacığı koyarlar ve süreç başlar.
- Tartışma
- İş birliği ve plan
- Senaryolar

Bu 3 ana unsuru baz alarak Cucumber'dan bahsedelim.

Tartışılıp sonrasında iş birliği ile ortaya konan senaryonun yazılan kod ile gerçeklenebilirliğinin ispatını Cucumber ile yaparız. Bu senaryolar şu şekilde görünürler.

	| Username | Password |
	| qwert123 | 123abcsa |
    Scenario: User wants to login and see landing page
	    Given that "User" on "Login" page
	    Given that "User" enter username as <Username>
	    Given that "User" enter password as <Password> 
	
		When "User" tries to click Login Button
		
		Then "User" sees landing page

Gördüğümüz gibi senaryo adımlardan oluşmaktadır. Bu adımlar sırası ile Cucumber'in gerçeklemesi gereken adımları temsil etmektedir.

İşte bu yukarda gördüğümüz senaryo ***Gherkin gramer kuralı*** olarak bilinmektedir. Cucumber bu kuralı baz alarak işlemlerini gerçekleştirir.

Gherkin dokümanları **.feature** uzantılı dosyalara yazılır.

Yukarıdaki senaryonun her bir adımını oluşturan unsur **step-definition** olarak adlandırılır. Bu adımlar bir çok programlama dili ile gerçeklenebilmektedir.

Test süreçlerini gerçeklemek için http://zero.webappsecurity.com sitesini kullandım.
