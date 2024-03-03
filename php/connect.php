<?php
    class Database{
        private function connect(){
            $conn = mysqli_connect('localhost','root','');
            if(!$conn){
                return false;
            }
            mysqli_select_db($conn, 'congnghemoi');
            mysqli_set_charset($conn, 'utf8');
            return $conn;
        }
        public function xemDulieu($query){
            $conn = $this->connect();
                        header("Content-type: application/json; charset=utf-8");

            if(!$conn){
                echo json_encode("Không thể kết nối");
            }
            $result = mysqli_query($conn, $query);
            $i = mysqli_num_rows($result);
            if(!$i) return json_encode("Không có dữ liệu để hiển thị");
            $arr = array();
            
            while($row = mysqli_fetch_array($result)){
                $masv = $row['MaSinhVien'];
                $hoten = $row['HoTen'];
                $ngaySinh = $row['NgaySinh'];
                $arr[] = array("masv"=> $masv, 'hoten'=>$hoten,'ngaysinh' =>$ngaySinh );
            }
            return json_encode($arr, JSON_UNESCAPED_UNICODE);

        }
    }
?>