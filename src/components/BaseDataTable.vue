<template>
    <div>
      <v-data-table
        v-bind="$attrs"
        v-on="$listeners"
        :page.sync="page"
        ref="DataTable"
        class="elevation-1 ma-6"
        style="white-space: nowrap"
        hide-default-footer
        :items-per-page="itemsPerPage"
        loading-text="Carregando... Aguarde"
        no-data-text="Não há dados disponíveis"
      >
      <template v-slot:top>
        <v-toolbar flat class="rounded-lg">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
        </v-toolbar>
      </template>
        <!-- passa slots comuns -->
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]>
          <slot :name="slotName" />
        </template>
  
        <!-- passa slots com escopo -->
        <template
          v-for="(_, scopedSlotName) in $scopedSlots"
          v-slot:[scopedSlotName]="slotData"
        >
          <slot :name="scopedSlotName" v-bind="slotData" />
        </template>
      </v-data-table>
      <template v-if="paginate">
        <div class="text-left pt-2" v-if="$attrs.items">
          <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="10"
            @input="$emit('pageChange', page)"
          ></v-pagination>
        </div>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    name: "newbasetable",
  
    props: {
      title:{
        type: String,
        default: ''
      },
      paginate: {
        type: Boolean,
        default: false,
      },
      actualPage: {
        type: Number,
        default: 1,
      },
      lastPage: {
        type: Number,
        default: null,
      },
      itemsPerPage: {
        type: Number,
        default: 15,
      },
    },
  
    data() {
      return {
        page: this.actualPage,
      };
    },
  
    computed: {
      pageCount() {
        if (this.lastPage == null) {
          return Math.ceil(this.$attrs.items.length / this.itemsPerPage);
        } else {
          return this.lastPage;
        }
      },
    },
  };
  </script>
  