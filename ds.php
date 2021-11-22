<?php
	$mysqli=new mysqli("localhost","f0497377","ivkivieric","f0497377_nari");
	$mysqli->query("SET NAMES 'utf8'");
	$mysqli->query("SET CHARACTER SET 'utf8'");
	if(isset($_POST["name"])){
		$name = htmlspecialchars($_POST["name"]);
		$year = htmlspecialchars($_POST["year"]);
		$doc = htmlspecialchars($_POST["doc"]);
		$tel = htmlspecialchars($_POST["tel"]);
		$adres = htmlspecialchars($_POST["adres"]);
		$path = "";
		// переменная для хранения результата
        $data = 'Файл не был успешно загружен на сервер';
        // путь для загрузки файлов
        $upload_path = dirname(__FILE__) . '/uploads/';
        // если файл был успешно загружен, то
        if ($_FILES['file']['error'] == UPLOAD_ERR_OK) {
          // получаем расширение исходного файла
          $extension_file = mb_strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));
          // получаем уникальное имя под которым будет сохранён файл 
          $full_unique_name = $upload_path . uniqid('file_', true).'.'.$extension_file;
          // перемещает файл из временного хранилища в указанную директорию
          if (move_uploaded_file($_FILES['file']['tmp_name'], $full_unique_name)) {
            // записываем в переменную $result ответ
/*            $data = 'Файл загружен и доступен по адресу: <b>/' . substr($full_unique_name, strlen($_SERVER['DOCUMENT_ROOT'])+1) . '</b>';
*/            
            $path  = 'http://f0497377.xsph.ru/' . substr($full_unique_name, strlen($_SERVER['DOCUMENT_ROOT'])+1);
            $data = '<tr>
		      				<th scope="row">#</th>
		      				<td>'.$name.'</td>
		      				<td>'.$year.'</td>
		      				<td>'.$doc.'</td>
		      				<td>'.$tel.'</td>
		      				<td>'.$adres.'</td>
		      				<td>'.$path.'</td>
		    				</tr>';
          } else {
            // записываем в переменную $result сообщение о том, что произошла ошибка
            $data = "Произошла обшибка при загрузке файла на сервер";
          }
        }
		
		/*$path = 'uploads/'.$_FILES['file']['name'];
		move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);*/
		/*$data = array(
			'name' => $name,
			'year' => $year,
			'doc' => $doc,
			'tel' => $tel,
			'adres' => $adres,
		);*/
		/*$data="Ваши данные отправлены";*/
		/*$data = "Success";*/
		$result = $mysqli->query("INSERT INTO `files`(`name`,`year`,`doc`,`tel`,`adres`,`path`) VALUES('$name','$year','$doc','$tel','$adres','$path')");
		$mysqli->close();
		echo $data;
		/*echo $data;*/
	}else{
		$data="Ваши данные не отправлены. Повторите отправку формы.";
		echo $data;
	}

	
?>