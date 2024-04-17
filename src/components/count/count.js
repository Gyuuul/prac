import style from './style.css'
export default function count (){
    // + 버튼 클릭 시 1 증가
    // - 버튼 클릭 시 1 감소
    // 초기는 0
    
    let addnum= 0;
    let num= 0;

    // 클릭 시 1씩 증가
    const plusHandler=()=>{
        addnum= addnum+1;
        // return num;
        document.querySelector("#plus").innerText=addnum;
    }

    // 클릭 시 1씩 증가
    const minusHandler=()=>{
        num= num-1;
        document.querySelector("#minus").innerText=num;
    }

    return(
        <section id='section'>
            <h2>COUNT⏲️</h2>
            <>
                <div>
                    <p id="minus">{num}</p>
                    <button type="button" onClick={minusHandler}>-</button>
                </div>
                <div>
                    <p id="plus">{num}</p>
                    <button type="button" onClick={plusHandler}>+</button>
                </div>
            </>
        </section>
    )
}