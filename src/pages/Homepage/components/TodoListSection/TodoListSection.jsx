export default function TodoListSection() {
  return (
    <div className="todo-list-section-container">
      <div className="task-list-container">
        <div className="task-item">
          <div className="task-item-title"></div>
          <div className="task-item-buttons">
            <div>수정</div>
            <div>삭제</div>
          </div>
        </div>
      </div>
      <div className="task-input-container">
        <input type="text" placeholder="Enter your new task and press enter" />
        <div>엔터 모양 아이콘</div>
      </div>
    </div>
  );
}
