import style from './style.css'
export default function diary(){
    const getTitle=()=>{
        const memoTitle= document.querySelector("#memotitle").value;
        return memoTitle;
    }

    const getContent=()=>{
        const memoContent= document.querySelector("#memocontent").value;
        return memoContent;
    }

    const today= new Date();
    const dayNames= ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
    // 연도 구하기
    const year= today.getFullYear();
    // 달 구하기
    const month= today.getMonth()+1;
    // 일 구하기
    const date= today.getDate();
    // 요일 구하기
    const day= today.getDay();
    const currentday= `${year}.&nbsp;${month}.&nbsp;${date}&nbsp;${dayNames[day]}`;


    // 메모 입력 후 input 리셋
    const resetMemo=()=>{
        document.querySelector("#memotitle").value= "";
        document.querySelector("#memocontent").value= "";
    }

    // 메모를 담아줄 배열 생성
    const memoArr= [];

    // 객체를 메모에 담아주는 함수
    const createMemo=(memo)=>{
        memoArr.push(memo);
    }

       // title, content 객체 생성
    const memoObj=()=>{
        const title= getTitle();
        const content= getContent();

        const Obj= {
            title: title,
            content: content,
        }

        return Obj;
    }

    // ul 안에 li < title, content 요소 포함
    const createLists=(memo)=>{
        const list= document.createElement("li");
        const memotitle= document.createElement("strong");
        const writeday= document.createElement("small");
        const memocontent= document.createElement("p");

        writeday.innerHTML= currentday;
        memotitle.innerHTML= memo.title;
        memocontent.innerHTML= memo.content;
        list.append(memotitle, writeday, memocontent);

        return list;
    }

    // 메모 보여주기
    const showMemo=()=>{
        const MemoLi=memoArr.map(createLists);
        const Ul= document.querySelector("#memolists");
        
        Ul.innerHTML= "";
        Ul.append(...MemoLi);
    }

    // 버튼 클릭 시
    // 메모 객체를 배열에 담아주기 createMemo(memo)
    // 메모 보여주기 showMemo();
    // input 비우기 resetMemo();
    const handler= ()=>{
        const memo= memoObj();
        createMemo(memo)
        showMemo();
        resetMemo();
    }

    return(
        <section>
            <div id="writediv">
                <h4>{year}.&nbsp;{month}.&nbsp;{date}의 메모🔐</h4>
                <input id="memotitle" type="text" placeholder="제목"></input>
                <textarea id="memocontent" type="text" placeholder="오늘 하루는 어떠셨나요?"></textarea>
                <button id="memobutton" type="button" onClick={handler}>작성하기</button>
            </div>

            <div id="listdiv">
                <ul id="memolists"></ul>
            </div>
        </section>
    )
}