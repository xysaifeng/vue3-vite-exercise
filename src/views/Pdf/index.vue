<template>
  <div>
    <!-- <iframe :src="pdfUrl" frameborder="0" width="100%" height="800px"></iframe> -->

    <!-- <div ref="pdfRef" id="pdf">
      <div></div>
    </div> -->

    <!-- :src="`pdfjs/web/viewer.html?file=pdfjs/web/compressed.tracemonkey-pldi-09.pdf`" -->
    <iframe
      :src="`pdfjs/web/viewer.html?file=${pdfUrl}`"
      frameborder="0"
      width="100%"
      height="800px"
    ></iframe>
  </div>
</template>
<!-- https://www.jb51.net/javascript/301644byh.htm -->
<!-- https://blog.csdn.net/IAIPython/article/details/134525898 -->
<script setup name="Table">
import { bus2 } from '@/utils/bus2'

import * as pdfjsLib from 'pdfjs-dist/build/pdf'

import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker'

import * as pdfView from 'pdfjs-dist/web/pdf_viewer'
// import 'pdfjs-dist/web/pdf_viewer.css'

import pdfUrl from '@/assets/test2.pdf'

const bus = {
  _on: bus2.on,
  _off: bus2.off,
  dispatch: bus2.emit
}

// pdfjsLib.GlobalWorkerOptions.workerSrc =
// 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js'

const pdf = ref()
const pdfRef = ref()
let step = 0

onMounted(async () => {
  // loadPDF()
})

async function loadPDF() {
  // pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker // 没用
  // const pdfUrl = pdfUrl // 替换为你的PDF文件的路径
  console.log(pdfView)

  console.log(document.getElementById('pdf').tagName)
  let pdfViewer = new pdfView.PDFViewer({
    eventBus: bus,
    container: pdfRef.value
  })

  console.log(pdfViewer)

  // await pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
  await pdfjsLib
    .getDocument({
      url: pdfUrl,
      cMapUrl: 'https://unpkg.com/pdfjs-dist@2.0.943/cmaps/', // 使用cdn加载pdf.js提供的字体文件。
      cMapPacked: true
    })
    .promise.then((pdf) => {
      pdfViewer.setDocument(pdf)
    })
}
</script>

<style lang="scss" scoped>
#pdf {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
