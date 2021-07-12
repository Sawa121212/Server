function Testing(obj) {
    let applyQuestion = 0;

    for (let i = 0; i < applys.length; i++) {
        let currentIndex = i + 1;

        let questApplyId = 'questApply' + currentIndex.toString();

        // проверяем количество ответов разделяя строку
        let split_array = applys[i].toString().split(',');

        if (split_array.length < 2) {
            if (applys[i].toString() === "") {
                document.getElementById('questApply' + currentIndex.toString()).textContent = ' * На данный вопрос автор не дал верного ответ';
                continue;
            }
            let id = currentIndex.toString() + applys[i].toString();
            let rad = document.getElementsByName('group' + currentIndex.toString().trim());

            let checkedCount = 0;
            for (let index = 0; index < rad.length; index++) {
                if (rad[index].checked) {
                    checkedCount++;
                    if (index + 1 === applys[currentIndex - 1]) {
                        applyQuestion++;
                    }
                    let indexRdBtn = index + 1;
                    let name = currentIndex.toString() + indexRdBtn.toString();
                    document.getElementById(name).className = 'answer-notapply';
                }
            }
            if (checkedCount === 0) {
                document.getElementById(questApplyId).textContent = ' * На данный вопрос вы не дали ответ';
            }
            document.getElementById(id).className = 'answer-apply';
        } else {
            let applyQuest_OnCount = 0;
            let checkedCount = 0;
            for (let j = 0; j < split_array.length; j++) {
                let id = currentIndex.toString() + split_array[j].toString().trim();

                let rad = document.getElementsByName('group' + currentIndex.toString());

                for (let index = 0; index < rad.length; index++) {
                    if (rad[index].checked) {
                        if (index + 1 === split_array[j]) {
                            applyQuest_OnCount++;
                        } else {
                            document.getElementById(currentIndex.toString() + indexRdBtn.toString()).className = 'answer-notapply';
                        }
                        let indexRdBtn = index + 1;
                        checkedCount++;
                    }
                    document.getElementById(id).className = 'answer-apply';
                }
            }
            if (applyQuest_OnCount === split_array.length && checkedCount === split_array.length) {
                applyQuestion++;
            }
            if (applyQuest_OnCount === 0) {
                document.getElementById('questApply' + currentIndex.toString()).textContent = ' * На данный вопрос вы не дали ответ';
            }
        }
    }

    document.getElementById('applysQuestion').textContent = applyQuestion.toString();
    document.getElementById('do_checkApplay').className = 'hidden';
}