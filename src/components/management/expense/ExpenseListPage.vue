<template>
  <div class="container">
    <MenuTitle menuTitle="경비리스트 관리" />
    <div class="contents">
      <ExpenseListItem />
      <ExpensePositionItem />
      <PositionMapList />
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import ExpenseListItem from './ExpenseListItem.vue';
import ExpensePositionItem from './ExpensePositionItem.vue';
import PositionMapList from './PositionMapList.vue';
export default {
  components: {
    MenuTitle,
    ExpenseListItem,
    ExpensePositionItem,
    PositionMapList,
  },
};
</script>

<style lang="scss">
.btn {
  color: #fff;
  font-weight: 600;
  float: right;
}
.contents {
  display: flex;
  justify-content: space-around;
}

.content {
  width: 15em;
}
.title {
  width: 100%;
  font-size: 1.3em;
  margin-bottom: 1em;
  button {
    float: right;
  }
}
.list {
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  justify-content: center;
  width: 100%;
  padding: 5px 5px;
  border-radius: 4px;
}

.line {
  width: 100%;
  border: 3px solid #fff;
  border-radius: 4px;
  display: block;
}
ul {
  padding: 0px 6px;
}

li {
  padding: 8px 4px;
  display: flex;
  .name {
    flex-basis: 100%;
  }
  .edit-btn,
  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    cursor: pointer;
  }
}
li:not(:last-child) {
  border-bottom: 1px solid #fff;
}
li:last-child {
  padding-bottom: 0;
}
</style>
