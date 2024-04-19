import style from './style.css'

export default function dropbox(){
    return(
        <>
            <select id="select-box">
                <option value="" selected disabled>지역을 선택해주세요.</option>
                <option>서울</option>
                <option>경기</option>
                <option>인천</option>
                <option>부산</option>
            </select>
        </>
    )
}