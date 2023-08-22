function Apple() {
    this.weight = 10;

    this.getWeight = function () {
        return this.weight;
    }
}

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.previousWeight = weight;

    this.getName = function () {
        return this.name;
    }

    this.getGender = function () {
        return this.gender;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.say = function (words) {
        conversation.innerHTML += "<p><strong>" + this.name + "</strong>: " + words + "</p>";
    }

    this.eat = function (apple) {
        if (apple.getWeight() > 0) {
            this.previousWeight = this.weight;
            this.weight++;
            apple.weight--;
            conversation.innerHTML += "<p><strong>" + this.name + "</strong> đã ăn một miếng táo</p>";
            if (this.weight > this.previousWeight) {
                conversation.innerHTML += "<p><span style='color:green;'>Cân nặng tăng lên thành " + this.weight + "kg</span></p>";
            } else {
                conversation.innerHTML += "<p>Cân nặng không đổi</p>";
            }
        } else {
            conversation.innerHTML += "<p>Không còn táo nữa!</p>";
        }
    }

    this.checkAppleWeight = function (apple) {
        conversation.innerHTML += "<p>Số lượng táo hiện tại: " + apple.getWeight() + "đv</p>";
    }
}

let numApples = document.getElementById("num-apples");
let conversation = document.getElementById("conversation");
let apple = new Apple();
let adam = new Human("Adam", "Nam", 65);
let eva = new Human("Eva", "Nữ", 48);

numApples.innerHTML = apple.getWeight();

while (apple.getWeight() > 0) {
    adam.eat(apple);
    eva.eat(apple);
}

adam.checkAppleWeight(apple);
eva.checkAppleWeight(apple);

adam.say("Tớ ăn không nổi nữa rồi :((");
eva.say("Ăn hết rồi có muốn ăn nữa cũng không còn đâu =))");

conversation.innerHTML += "<p><span style='color: red; font-weight: bold;'>" + adam.getName() + " " + adam.getGender() + " hiện tại nặng " + adam.getWeight() + "kg</span></p>";
conversation.innerHTML += "<p><span style='color: red; font-weight: bold;'>" + eva.getName() + " " + eva.getGender() + " hiện tại nặng " + eva.getWeight() + "kg</span></p>";