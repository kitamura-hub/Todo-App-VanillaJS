import "./styles.css";

// 追加ボタン押下で「未完了のTodo」に追加
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (targetButton) => {
  document.getElementById("incomplete-list").removeChild(targetButton);
};

// 未完了リストを生成する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)生成
  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncompleteList(compBtn.parentNode);
    // 完了リストに追加する要素
    const addTarget = compBtn.parentNode;
    // todoの中身(テキスト)を取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liを生成し、textを格納
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタン生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      // 戻すボタンの親タグを完了リストから削除
      const deleteTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backBtn.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // addTargetの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)生成
  const delBtn = document.createElement("button");
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncompleteList(delBtn.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compBtn);
  div.appendChild(delBtn);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
