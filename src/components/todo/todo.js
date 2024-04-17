import style from './style.css'
export default function todo (){
    // 입력후 제출 함수
    const save=()=>{
        
    }

    // 메모 제목
    const getTitle=()=>{
        const memoTitle= document.querySelector("#memotitle").value;
        return memoTitle;
    }

    // 메모 내용
    const getContent=()=>{
        const memoConten= document.querySelector("#memocontent").value;
        return memoConten;
    }

    // 입력 후 메모 제목과 내용 빈칸
    const resetMemo=()=> {
        document.querySelector("#memotitle").value= "";
        document.querySelector("#memocontent").value= "";
    }

    // 메모 담는 공간
    const memoLists= [];

    // 메모한 걸 담는 공간
    const saveMemo=(memo)=>{
        memoLists.push(memo);
    }

    // 메모의 제목과 내용이 담긴 함수
    const createMemo=()=>{
        const title= getTitle();
        const content= getContent();

        const memoObj= {
            title: title,
            content: content,
        }

        return memoObj;
    }

    // 메모 보여주기 전, li 요소 만들어주기
    const createLi=(memo)=>{
        const Li= document.createElement("li");
        const Title= document.createElement("strong");
        const Content= document.createElement("p")

        // title을 strong에 넣어주기
        Title.innerHTML = memo.title;
        Content.innerHTML= memo.content;
        Li.append(Title, Content);
        return Li;
    }

    // 메모 보여주기
    const showMemo=()=>{
        const MemoList= memoLists.map(createLi);
        const MemoUl= document.querySelector("#memolists");

        MemoUl.innerHTML = "";
        MemoUl.append(...MemoList);
    }

    // 버튼 클릭 시
    // 메모 담고
    // 메모 보여주고
    // input 초기화
    const handler=()=>{
        const memo = createMemo();
        saveMemo(memo);
        showMemo();
        resetMemo();
    }

    return(
        <>
            <div>
                <h2>TO DO List</h2>
                <label>title</label>
                <input type="text" id="memotitle"></input>
                <label>content</label>
                <input type="text" id="memocontent"></input>
                <button type="button" id="memobutton" onClick={handler}>입력</button>
                
                <ul id="memolists">
                </ul>
            </div>
        </>
    )
}