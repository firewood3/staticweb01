var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    console.log(this)
    var that = this; // relatioinship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friend) {
      console.log(this) // 여기서 this는 뭔지 모르겠다.
      console.log(that.name, friend);
    });
  },
};

relationship1.logFriends();
console.log('--------------------------')
const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    console.log(this); // 여기서 this는 relationship2을 가리킨다.
    this.friends.forEach(friend => {
      console.log(this) // 여기서 this는 relationship2을 가리킨다.
      console.log(this.name, friend);
    });
  },
}
relationship2.logFriends();
