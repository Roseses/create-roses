```
<template>
  <div>
    <el-row>
      <el-col>
        <el-table
          ref="elTable"
          border
          v-loading="loading"
          :data="tableData"
          :columns="tableColumns"
        >
          <el-table-column
            :key="index" v-for="(col, index) in tableColumns"
            :label="col.label"
            :prop="col.prop"
            :align="col.align || 'center'"
          >
            <template
              slot-scope="scope"
            >
              <template
                v-if="typeof col.render === 'function'"
              >
                {{ col.render(scope.row) }}
              </template>
              <template
                v-else
              >
                {{ typeof scope.row[col.prop] === 'undefined' ? '-' : scope.row[col.prop] }}
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-pagination
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageNo"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          :total="total"
          background
          layout="total, sizes, prev, pager, next, jumper"
          style="float: right; padding-top: 16px"
        >
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
      default: () => [],
    },
    tableColumns: {
      type: Array,
      required: true,
      default: () => [],
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageNo: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    // 每页数
    sizeChangeHandle(val) {
      this.$emit('refreshList', {
        pageSize: val,
        pageNo: 1
      })
    },
    // 当前页
    currentChangeHandle(val) {
      this.$emit('refreshList', {
        pageNo: val,
        pageSize: this.pageSize
      })
    },
  }
}
</script>
```

# tip 简单使用
```
<template>
  <Table
    :table-columns="cols"
    :table-data="tableData"
    :loading="tableLoading"
    :page-size="tableConfig.pageSize"
    :page-no="tableConfig.pageNo"
    :total="total"
    @refreshList="tabRefresh"
  >
  </Table>
</template>

<script>
export default {
  data () {
    return {
      total: 0, // 总页数
      tableConfig: {
        pageSize: 10,
        pageNo: 1
      },
      tableLoading: false, // 是否在加载
      cols: [
        {
          label: 'xx',
          prop: 'xxx',
          render: (row) => row.xx 
        }
      ],
      tableData: [] // 数据
    }
  },
  methods: {
    tabRefresh (pageObj) {
      this.tableConfig = {
        ...this.tableConfig,
        pageSize: pageObj.pageSize,
        pageNo: pageObj.pageNo
      }
      this.$nextTick(async () => {
        this.tableLoading = true
        try {
          // 发送请求  const { data } = await
          const data = {
            code: 0,
            data: {
              records: [],
              total: 0
            }
          }
          this.tableLoading = false
          if (data.code === 0) {
            this.tableData = data.data.records || []
            this.total = data.data.total || 0
          } else {
            this.$message.error(data.msg)
          }
        } catch (e) {
          console.log(e, '----------表格查询报错')
        } finally {
          this.tableLoading = false
        }
      } )
    }
  }
}
</script>
```