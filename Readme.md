# Kitten App
    Author: Tohirjon Abdujaborov
Current app fetches kitten-images from [placekitten.com] API. There are two views: 
1. Kitten List

    ![alt text](https://tohir.lt/KittenApp/rsz_screenshot1.jpg)

2. Kitten View

    ![alt text](http://tohir.lt/KittenApp/rsz_screenshot2.jpg)
    
# API
1. In order to get list of items, was decided to make such solution: [https://tohir.lt/KittenApp/getKittens.php]
2. Current API is written with PHP.
3. It generates random kitten-names, kitten-image-numbers for fetching. 
4. It return back JSON object with Kitten data
5. JSON-object (Kitten-data) stores: Kitten-name, kitten-image-url
6. API source-code: 
    `<?php 
		
		function getKittens ($kittensFetchAmount){
			$kittenNames = array ('Smokey', 'Bella', 'Kitty' , 'Charlie' , 'Lucy', 'Leo' , 'Milo' , 'Jack' , 'Simba' , 'Chloe' , 
        						  'Ziggy' , 'Cleo' , 'Loki' , 'Daisy', 'Missy' , 'Oreo'); 
			$kittenData = array (); 
 			for ($i=1; $i <= $kittensFetchAmount; $i++){
 				$kitten = array ("kittenName"=>$kittenNames[getRandomNumber(0,15)], 
 							"kittenImageUrl"=>"https://placekitten.com/400/300?image=".getRandomNumber(1,16).""); 
 				array_push($kittenData, $kitten);
 			}
			header('Content-Type: application/json');
			echo json_encode($kittenData); 
		}
		function getRandomNumber ($from, $to){
			return rand($from,$to);
		}
		if (isset($_GET['kittensAmountToFetch'])){
			getKittens($_GET['kittensAmountToFetch']); 
		}
?>`
7. I stored API in my own server Tohir.lt. This solution was the best for me, because it returns a JSON-object. But [placekitten.com] was straitly rendering a kitten image. I could use such way, but it is not includes in the rules of List View.   
# Video Screenshot 
- You will be able to watch video screenshot by opening this link: [https://drive.google.com/file/d/1cPH2_Ur7Qx1AYH-6JzxTYR-WwsKo_9U_/view?usp=sharing]
- 
# Generated APK
- You can download and install on android built apk-file by following this link: [https://drive.google.com/file/d/1U1_NWbmmOzKoQZu2EGebebuY-nF0odO5/view?usp=sharing]