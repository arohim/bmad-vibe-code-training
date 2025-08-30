Record training steps


*** Create Gemini Gems to draft prd.md and architecture.md
1. Create Gemini Gems with instruction "*analysis วันนี้ผมต้องการสร้าง MVP (ไม่ต้องเยอะ) เรื่อง CRM สำหรับ logistic เน้นหน้าตาง่ายๆ คนไม่รู้เรื่องคอมก็ใช้ได้ เป็นเว็บไซต์"
2. Upload Key file from https://github.com/bmad-code-org/BMAD-METHOD/blob/main/dist/teams/team-fullstack.txt
3. Brain storm with the AI to create project brief
4. Don't forget to ask it to use mock data for the first version
5. put "*agent pm ต่อเลย" to create product requirement document (PRD)
6. put "*agent uxui ต่อเลย" to create ux ui specification.md
7. put "*agent architecture ต่อเลย" to create architecture spec.md

*** create an empty folder
1. create an empty folder for the project
2. set up bmad-method `npx bmad-method install`
3. Put dot (.) as a path
4. select bmad-core
5. select Y to shard prd and architecture files

*** Create a project
1. create docs folder and put prd.md and architecture.md in there



*** sharding documents
/BMad\agents:po *shard-doc docs/prd.md prd
/BMad\agents:po *shard-doc docs/architecture.md architecture

*** Scrum master to create stories
/BMad\agents:sm *create

*** Create agents
1. /agents + Enter
2. Follow the stemps
3. Go to Gemini and asked to create agent prompts
```
*po สอบถามครับ ถ้าผมต้องการสร้าง sub agent ในการเขียนโปรแกรมทั้้งโปรเจคนี้ ควรมีใครบ้างครับ ที่ผมนึกออกน่าจะมี:

React expert: ทำหน้าที่พัฒนา frontend

Shadcn: ทำหน้าที่ UI UX ช่วย React expert

ฺBackend expert: ทำหน้าที่ ดูแลหลังบ้านให้ระบบ

ควรมีใครอีกไหม และแต่ละ sub agents ต้องมี job description อย่างไรให้ครบ ขอเป็น prompt พร้อมใช้งาน
```

*** Initiate CLAUDE.md, claude will read all the code base
/init


*** run BMAD orchestrator to start development parallely
 /BMad\agents:bmad-orchestrator ผมต้องการให้คุณทำการพัฒนาตาม story c:\Users\arohi\Documents\projects\my-logistic-bmad\docs\stories\1.1.story.md โดยให้คุณทำการวิเคราะห์ Sub-Agents ทั้งหมดที่ c:\Users\arohi\Documents\projects\my-logistic-bmad\.claude\agents แล้วทำการเลือกเอา Sub-Agents ที่เกี่ยวข้องกับการทำงานให้สำเร็จ ออกมาทำงานพร้อมกันแบบ Parallel (ถ้าเป็นไปได้) เมื่อทำงานเสร็จทั้ง Story แล้วให้เปลี่ยนบทบาทตัวเองเป็น Dev Agent เพื่อทำการ update file Story ให้พร้อมสำหรับการตรวจสอบโดย QA ในขั้นตอนต่อไป

*** ask QA to verify
/BMad:agents:qa ตรวจงาน


*** run the project on website
npm run dev

*** once 1.1 story has done you can continue create the next story by, you will get 1.2 story.md
/BMad\agents:sm *create

*** run BMAD orchestrator again but change to 1.2.story.md
/BMad\agents:bmad-orchestrator ผมต้องการให้คุณทำการพัฒนาตาม story c:\Users\arohi\Documents\projects\my-logistic-bmad\docs\stories\1.2.story.md โดยให้คุณทำการวิเคราะห์ Sub-Agents ทั้งหมดที่ c:\Users\arohi\Documents\projects\my-logistic-bmad\.claude\agents แล้วทำการเลือกเอา Sub-Agents ที่เกี่ยวข้องกับการทำงานให้สำเร็จ ออกมาทำงานพร้อมกันแบบ Parallel (ถ้าเป็นไปได้) เมื่อทำงานเสร็จทั้ง Story แล้วให้เปลี่ยนบทบาทตัวเองเป็น Dev Agent เพื่อทำการ update file Story ให้พร้อมสำหรับการตรวจสอบโดย QA ในขั้นตอนต่อไป


**** orchestrator prompt
/BMad\agents:bmad-orchestrator Start below tasks using agents parallelly if possible
Tasks:
- Develop a story from docs/stories/1.3.story.md
- Switch to Dev Agent and update story.md
- Switch to QA Agent and verify the story



****Note: Byterover เพื่อช่วยเก็บ memory ของ claude ไว้ที่ cloud
****Note: Compat คือรวมความรู้ทั้งหมดของ claude
