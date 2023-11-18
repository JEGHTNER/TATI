import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ElementsView from "../views/ElementsView.vue";
import MapView from "../views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/elements",
      name: "elements",
      component: ElementsView,
    },
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/board",
      name: "board",
      // component: TheBoardView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BoardView.vue"),
      redirect: { name: "list" },
      children: [
        {
          path: "list",
          name: "list",
          component: () => import("@/components/boards/BoardList.vue"),
        },
        {
          path: "detail/:articleno",
          name: "detail",
          component: () => import("@/components/boards/BoardDetail.vue"),
        },
        {
          path: "write",
          name: "write",
          component: () => import("@/components/boards/BoardWrite.vue"),
        },
        {
          path: "/test",
          name: "test",
          redirect: { name: "test-main" },
          component: () => import("@/views/TestView.vue"),
          children: [
            {
              path: "main",
              name: "test-main",
              component: () => import("@/components/tests/TestMain.vue"),
            },
            {
              path: "test",
              name: "test-test",
              component: () => import("@/components/tests/TestTest.vue"),
            },
            {
              path: "result/:type",
              name: "test-result",
              component: () => import("@/components/tests/TestResult.vue"),
            },
          ],
        },
        {
          path: "/board",
          name: "board",
          // component: TheBoardView,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/BoardView.vue"),
          redirect: { name: "list" },
          children: [
            {
              path: "list",
              name: "list",
              component: () => import("@/components/boards/BoardList.vue"),
            },
            {
              path: "detail/:articleno",
              name: "detail",
              component: () => import("@/components/boards/BoardDetail.vue"),
            },
            {
              path: "write",
              name: "write",
              component: () => import("@/components/boards/BoardWrite.vue"),
            },
            {
              path: "modify/:articleno",
              name: "modify",
              component: () => import("@/components/boards/BoardModify.vue"),
            },
          ],
        },
        {
          path: "regist",
          name: "regist",
          component: () => import("@/components/users/UserRegist.vue"),
        },
        {
          path: "mypage",
          name: "mypage",
          component: () => import("@/components/users/UserMypage.vue"),
        },
        {
          path: "follower/:userid",
          name: "follower",
          component: () => import("@/components/users/UserFollower.vue"),
        },
        {
          path: "following/:userid",
          name: "following",
          component: () => import("@/components/users/UserFollowing.vue"),
        },
        {
          path: "userinfo/:userid",
          name: "userinfo",
          component: () => import("@/components/users/UserInfo.vue"),
        },
        {
          path: "mypage",
          name: "mypage",
          component: () => import("@/components/users/UserMypage.vue"),
        },
      ],
    },
  ],
});

export default router;
