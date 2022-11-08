
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
const cube = new Entity()
engine.addEntity(cube);
const clip=new AudioClip("Zomato.mp3")
const source=new AudioSource(clip)
cube.addComponent(source)
source.volume = 0.8
source.playing=true
// _scene.addComponentOrReplace(transform)

// _scene.addComponent(new AudioSource(new AudioClip("Zomato.mp3")));
// _scene.addComponent(
//   new OnClick((): void=>{
//     _scene.getComponent(AudioSource).playOnce();
//   })
// )

const concrete = new Entity('concrete')
engine.addEntity(concrete)
concrete.setParent(_scene)
const gltfShape = new GLTFShape("3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
concrete.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete.addComponentOrReplace(transform2)

const concrete2 = new Entity('concrete2')
engine.addEntity(concrete2)
concrete2.setParent(_scene)
concrete2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete2.addComponentOrReplace(transform3)

const concrete3 = new Entity('concrete3')
engine.addEntity(concrete3)
concrete3.setParent(_scene)
concrete3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete3.addComponentOrReplace(transform4)

const concrete4 = new Entity('concrete4')
engine.addEntity(concrete4)
concrete4.setParent(_scene)
concrete4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete4.addComponentOrReplace(transform5)

const concrete5 = new Entity('concrete5')
engine.addEntity(concrete5)
concrete5.setParent(_scene)
concrete5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete5.addComponentOrReplace(transform6)

const concrete6 = new Entity('concrete6')
engine.addEntity(concrete6)
concrete6.setParent(_scene)
concrete6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete6.addComponentOrReplace(transform7)

const concreteWall7 = new Entity('concreteWall7')
engine.addEntity(concreteWall7)
concreteWall7.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(0, 0, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.818175792694092, 2.193363666534424, 1.0000030994415283)
})
concreteWall7.addComponentOrReplace(transform8)
const gltfShape2 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
concreteWall7.addComponentOrReplace(gltfShape2)

const concreteWall8 = new Entity('concreteWall8')
engine.addEntity(concreteWall8)
concreteWall8.setParent(_scene)
concreteWall8.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(3, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3577128648757935, 2.193363666534424, 0.9999995827674866)
})
concreteWall8.addComponentOrReplace(transform9)

const concreteWall9 = new Entity('concreteWall9')
engine.addEntity(concreteWall9)
concreteWall9.setParent(_scene)
concreteWall9.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(8.009012222290039, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5789718627929688, 2.193363666534424, 0.9999996423721313)
})
concreteWall9.addComponentOrReplace(transform10)

const concreteWall10 = new Entity('concreteWall10')
engine.addEntity(concreteWall10)
concreteWall10.setParent(_scene)
concreteWall10.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(21, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.542607069015503, 2.193363666534424, 0.9999996423721313)
})
concreteWall10.addComponentOrReplace(transform11)

const concreteWall12 = new Entity('concreteWall12')
engine.addEntity(concreteWall12)
concreteWall12.setParent(_scene)
concreteWall12.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(28.149850845336914, 0, 31.990896224975586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.6475260257720947, 2.193363666534424, 0.9999996423721313)
})
concreteWall12.addComponentOrReplace(transform12)

const concreteWall14 = new Entity('concreteWall14')
engine.addEntity(concreteWall14)
concreteWall14.setParent(_scene)
concreteWall14.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(0.013389099389314651, 0, 9.855181133389124e-7),
  rotation: new Quaternion(-2.7916168827263593e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(19.539165496826172, 2.193363666534424, 1.000002384185791)
})
concreteWall14.addComponentOrReplace(transform13)

const concreteWall15 = new Entity('concreteWall15')
engine.addEntity(concreteWall15)
concreteWall15.setParent(_scene)
concreteWall15.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(32, 0, 0),
  rotation: new Quaternion(-2.7916168827263593e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.962026596069336, 2.193363666534424, 1.0000022649765015)
})
concreteWall15.addComponentOrReplace(transform14)

const concreteWall16 = new Entity('concreteWall16')
engine.addEntity(concreteWall16)
concreteWall16.setParent(_scene)
concreteWall16.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(48, 0, 0),
  rotation: new Quaternion(1.9739713200605732e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(16.000038146972656, 2.193363666534424, 1.000002384185791)
})
concreteWall16.addComponentOrReplace(transform15)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(48, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.074770927429199, 2.193363666534424, 1)
})
wallPlainGlass.addComponentOrReplace(transform16)
const gltfShape3 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape3)

const frames = new Entity('frames')
engine.addEntity(frames)
frames.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(46.82695770263672, 0, 15.867446899414062),
  rotation: new Quaternion(-2.023942875816788e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(14.098516464233398, 10.075716018676758, 3.000033378601074)
})
frames.addComponentOrReplace(transform17)
const gltfShape4 = new GLTFShape("b9d3d3bf-e434-4bff-a4ac-b3e1a215cf91/frames.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
frames.addComponentOrReplace(gltfShape4)

const furnacePipe = new Entity('furnacePipe')
engine.addEntity(furnacePipe)
furnacePipe.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(42, 5.312747001647949, 20.291994094848633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5322413444519043, 3.418198585510254, 0.5765116214752197)
})
furnacePipe.addComponentOrReplace(transform18)
const gltfShape5 = new GLTFShape("530260bb-eccc-49f9-9d72-7f039030af29/Furnace 5 Pipe.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
furnacePipe.addComponentOrReplace(gltfShape5)

const furnacePipe2 = new Entity('furnacePipe2')
engine.addEntity(furnacePipe2)
furnacePipe2.setParent(_scene)
furnacePipe2.addComponentOrReplace(gltfShape5)
const transform19 = new Transform({
  position: new Vector3(42, 5.312747001647949, 11.543636322021484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5857490301132202, 3.418198585510254, 0.48398852348327637)
})
furnacePipe2.addComponentOrReplace(transform19)

const furnacePipe3 = new Entity('furnacePipe3')
engine.addEntity(furnacePipe3)
furnacePipe3.setParent(_scene)
furnacePipe3.addComponentOrReplace(gltfShape5)
const transform20 = new Transform({
  position: new Vector3(38.5, 5.312747001647949, 11.543636322021484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5227234959602356, 3.418198585510254, 0.5074946880340576)
})
furnacePipe3.addComponentOrReplace(transform20)

const furnacePipe4 = new Entity('furnacePipe4')
engine.addEntity(furnacePipe4)
furnacePipe4.setParent(_scene)
furnacePipe4.addComponentOrReplace(gltfShape5)
const transform21 = new Transform({
  position: new Vector3(38.5, 5.312747001647949, 20.291994094848633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4566759765148163, 3.418198585510254, 0.49061352014541626)
})
furnacePipe4.addComponentOrReplace(transform21)

const longOpenedWoodenCrate = new Entity('longOpenedWoodenCrate')
engine.addEntity(longOpenedWoodenCrate)
longOpenedWoodenCrate.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(40.21986770629883, 4.954618453979492, 15.859443664550781),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.3017449378967285, 3.068925142288208, 6.570006847381592)
})
longOpenedWoodenCrate.addComponentOrReplace(transform22)
const gltfShape6 = new GLTFShape("f2316746-f85b-4fbe-bcd5-632350965948/CrateLong_02/CrateLong_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
longOpenedWoodenCrate.addComponentOrReplace(gltfShape6)

const beachgrassFern = new Entity('beachgrassFern')
engine.addEntity(beachgrassFern)
beachgrassFern.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(40, 5.411567211151123, 11.866891860961914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern.addComponentOrReplace(transform23)
const gltfShape7 = new GLTFShape("7ea57b9c-29ee-47a5-9ad2-c109101b72ac/JunglePlant_06/JunglePlant_06.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
beachgrassFern.addComponentOrReplace(gltfShape7)

const beachgrassFern2 = new Entity('beachgrassFern2')
engine.addEntity(beachgrassFern2)
beachgrassFern2.setParent(_scene)
beachgrassFern2.addComponentOrReplace(gltfShape7)
const transform24 = new Transform({
  position: new Vector3(40, 5.411567211151123, 13.633108139038086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern2.addComponentOrReplace(transform24)

const beachgrassFern3 = new Entity('beachgrassFern3')
engine.addEntity(beachgrassFern3)
beachgrassFern3.setParent(_scene)
beachgrassFern3.addComponentOrReplace(gltfShape7)
const transform25 = new Transform({
  position: new Vector3(40, 5.411567211151123, 15.723608016967773),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern3.addComponentOrReplace(transform25)

const beachgrassFern4 = new Entity('beachgrassFern4')
engine.addEntity(beachgrassFern4)
beachgrassFern4.setParent(_scene)
beachgrassFern4.addComponentOrReplace(gltfShape7)
const transform26 = new Transform({
  position: new Vector3(40, 5.411567211151123, 17.55924415588379),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern4.addComponentOrReplace(transform26)

const beachgrassFern5 = new Entity('beachgrassFern5')
engine.addEntity(beachgrassFern5)
beachgrassFern5.setParent(_scene)
beachgrassFern5.addComponentOrReplace(gltfShape7)
const transform27 = new Transform({
  position: new Vector3(40, 5.411567211151123, 19.346986770629883),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern5.addComponentOrReplace(transform27)

const arecaPalm = new Entity('arecaPalm')
engine.addEntity(arecaPalm)
arecaPalm.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(38.5, 5.543153285980225, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
arecaPalm.addComponentOrReplace(transform28)
const gltfShape8 = new GLTFShape("b0f2c844-e0ba-443d-9f32-e8ad3c555c6c/JunglePlant_09/JunglePlant_09.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
arecaPalm.addComponentOrReplace(gltfShape8)

const arecaPalm2 = new Entity('arecaPalm2')
engine.addEntity(arecaPalm2)
arecaPalm2.setParent(_scene)
arecaPalm2.addComponentOrReplace(gltfShape8)
const transform29 = new Transform({
  position: new Vector3(38.5, 5.543153285980225, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm2.addComponentOrReplace(transform29)

const arecaPalm4 = new Entity('arecaPalm4')
engine.addEntity(arecaPalm4)
arecaPalm4.setParent(_scene)
arecaPalm4.addComponentOrReplace(gltfShape8)
const transform30 = new Transform({
  position: new Vector3(38.5, 5.543153285980225, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm4.addComponentOrReplace(transform30)

const arecaPalm5 = new Entity('arecaPalm5')
engine.addEntity(arecaPalm5)
arecaPalm5.setParent(_scene)
arecaPalm5.addComponentOrReplace(gltfShape8)
const transform31 = new Transform({
  position: new Vector3(38.5, 5.543153285980225, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
arecaPalm5.addComponentOrReplace(transform31)

const arecaPalm6 = new Entity('arecaPalm6')
engine.addEntity(arecaPalm6)
arecaPalm6.setParent(_scene)
arecaPalm6.addComponentOrReplace(gltfShape8)
const transform32 = new Transform({
  position: new Vector3(38.5, 5.543153285980225, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm6.addComponentOrReplace(transform32)

const purpleHeartPlant2 = new Entity('purpleHeartPlant2')
engine.addEntity(purpleHeartPlant2)
purpleHeartPlant2.setParent(_scene)
const gltfShape9 = new GLTFShape("7de8e1ad-f3ff-436d-904e-5d4032f6fce9/Plant_04/Plant_04.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
purpleHeartPlant2.addComponentOrReplace(gltfShape9)
const transform33 = new Transform({
  position: new Vector3(38.5, 6.134807109832764, 18.93978500366211),
  rotation: new Quaternion(-4.144438190258146e-15, -0.9081679582595825, 1.0826204999148104e-7, 0.4186060428619385),
  scale: new Vector3(0.9711459875106812, 2.12662410736084, 1.3335950374603271)
})
purpleHeartPlant2.addComponentOrReplace(transform33)

const purpleHeartPlant3 = new Entity('purpleHeartPlant3')
engine.addEntity(purpleHeartPlant3)
purpleHeartPlant3.setParent(_scene)
purpleHeartPlant3.addComponentOrReplace(gltfShape9)
const transform34 = new Transform({
  position: new Vector3(38.5, 6.134807109832764, 17.298568725585938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.12662410736084, 1.2942861318588257)
})
purpleHeartPlant3.addComponentOrReplace(transform34)

const purpleHeartPlant4 = new Entity('purpleHeartPlant4')
engine.addEntity(purpleHeartPlant4)
purpleHeartPlant4.setParent(_scene)
purpleHeartPlant4.addComponentOrReplace(gltfShape9)
const transform35 = new Transform({
  position: new Vector3(38.5, 6.134807109832764, 15.427685737609863),
  rotation: new Quaternion(-4.144438190258146e-15, -0.9081679582595825, 1.0826204999148104e-7, 0.4186060428619385),
  scale: new Vector3(0.9711463451385498, 2.12662410736084, 1.3335957527160645)
})
purpleHeartPlant4.addComponentOrReplace(transform35)

const purpleHeartPlant5 = new Entity('purpleHeartPlant5')
engine.addEntity(purpleHeartPlant5)
purpleHeartPlant5.setParent(_scene)
purpleHeartPlant5.addComponentOrReplace(gltfShape9)
const transform36 = new Transform({
  position: new Vector3(38.5, 6.134807109832764, 13.573944091796875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.12662410736084, 1.2942861318588257)
})
purpleHeartPlant5.addComponentOrReplace(transform36)

const furnacePipe5 = new Entity('furnacePipe5')
engine.addEntity(furnacePipe5)
furnacePipe5.setParent(_scene)
furnacePipe5.addComponentOrReplace(gltfShape5)
const transform37 = new Transform({
  position: new Vector3(38.5, 0, 20.711341857910156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4566759765148163, 0.4601687490940094, 0.49061352014541626)
})
furnacePipe5.addComponentOrReplace(transform37)

const furnacePipe6 = new Entity('furnacePipe6')
engine.addEntity(furnacePipe6)
furnacePipe6.setParent(_scene)
furnacePipe6.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(42, 0, 20.711341857910156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5322413444519043, 0.4601687490940094, 0.5765116214752197)
})
furnacePipe6.addComponentOrReplace(transform38)

const furnacePipe7 = new Entity('furnacePipe7')
engine.addEntity(furnacePipe7)
furnacePipe7.setParent(_scene)
furnacePipe7.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(42, 0, 11.502857208251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5857490301132202, 0.4601687490940094, 0.48398852348327637)
})
furnacePipe7.addComponentOrReplace(transform39)

const furnacePipe8 = new Entity('furnacePipe8')
engine.addEntity(furnacePipe8)
furnacePipe8.setParent(_scene)
furnacePipe8.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(38.5, 0, 11.502857208251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5227234959602356, 0.4601687490940094, 0.5074946880340576)
})
furnacePipe8.addComponentOrReplace(transform40)

const longOpenedWoodenCrate2 = new Entity('longOpenedWoodenCrate2')
engine.addEntity(longOpenedWoodenCrate2)
longOpenedWoodenCrate2.setParent(_scene)
longOpenedWoodenCrate2.addComponentOrReplace(gltfShape6)
const transform41 = new Transform({
  position: new Vector3(40.21986770629883, 0.6642826795578003, 16.087718963623047),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.332701683044434, 3.497873306274414, 6.0341668128967285)
})
longOpenedWoodenCrate2.addComponentOrReplace(transform41)

const beachgrassFern10 = new Entity('beachgrassFern10')
engine.addEntity(beachgrassFern10)
beachgrassFern10.setParent(_scene)
beachgrassFern10.addComponentOrReplace(gltfShape7)
const transform42 = new Transform({
  position: new Vector3(39.34852981567383, 0.7771458625793457, 19.984636306762695),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern10.addComponentOrReplace(transform42)

const beachgrassFern11 = new Entity('beachgrassFern11')
engine.addEntity(beachgrassFern11)
beachgrassFern11.setParent(_scene)
beachgrassFern11.addComponentOrReplace(gltfShape7)
const transform43 = new Transform({
  position: new Vector3(40.72938537597656, 0.7771458625793457, 19.21434783935547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern11.addComponentOrReplace(transform43)

const beachgrassFern12 = new Entity('beachgrassFern12')
engine.addEntity(beachgrassFern12)
beachgrassFern12.setParent(_scene)
beachgrassFern12.addComponentOrReplace(gltfShape7)
const transform44 = new Transform({
  position: new Vector3(40.09718704223633, 0.7771458625793457, 17.611675262451172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern12.addComponentOrReplace(transform44)

const beachgrassFern13 = new Entity('beachgrassFern13')
engine.addEntity(beachgrassFern13)
beachgrassFern13.setParent(_scene)
beachgrassFern13.addComponentOrReplace(gltfShape7)
const transform45 = new Transform({
  position: new Vector3(40.09718704223633, 0.7771458625793457, 15.705333709716797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern13.addComponentOrReplace(transform45)

const beachgrassFern14 = new Entity('beachgrassFern14')
engine.addEntity(beachgrassFern14)
beachgrassFern14.setParent(_scene)
beachgrassFern14.addComponentOrReplace(gltfShape7)
const transform46 = new Transform({
  position: new Vector3(40.09718704223633, 0.7771458625793457, 14.094844818115234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern14.addComponentOrReplace(transform46)

const beachgrassFern15 = new Entity('beachgrassFern15')
engine.addEntity(beachgrassFern15)
beachgrassFern15.setParent(_scene)
beachgrassFern15.addComponentOrReplace(gltfShape7)
const transform47 = new Transform({
  position: new Vector3(40.09718704223633, 0.7771458625793457, 11.700065612792969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern15.addComponentOrReplace(transform47)

const arecaPalm10 = new Entity('arecaPalm10')
engine.addEntity(arecaPalm10)
arecaPalm10.setParent(_scene)
arecaPalm10.addComponentOrReplace(gltfShape8)
const transform48 = new Transform({
  position: new Vector3(40.05445861816406, 0.9494185447692871, 18.488479614257812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5147193670272827, 3.0485520362854004, 1.4001975059509277)
})
arecaPalm10.addComponentOrReplace(transform48)

const arecaPalm12 = new Entity('arecaPalm12')
engine.addEntity(arecaPalm12)
arecaPalm12.setParent(_scene)
arecaPalm12.addComponentOrReplace(gltfShape8)
const transform49 = new Transform({
  position: new Vector3(39.1428108215332, 0.9494185447692871, 15.949248313903809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5147193670272827, 3.0485520362854004, 1.4001975059509277)
})
arecaPalm12.addComponentOrReplace(transform49)

const arecaPalm9 = new Entity('arecaPalm9')
engine.addEntity(arecaPalm9)
arecaPalm9.setParent(_scene)
arecaPalm9.addComponentOrReplace(gltfShape8)
const transform50 = new Transform({
  position: new Vector3(40.7558479309082, 0.9494185447692871, 12.750654220581055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5147193670272827, 3.0485520362854004, 1.4001975059509277)
})
arecaPalm9.addComponentOrReplace(transform50)

const purpleOysterPlant = new Entity('purpleOysterPlant')
engine.addEntity(purpleOysterPlant)
purpleOysterPlant.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(38.5, 1.9913458824157715, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleOysterPlant.addComponentOrReplace(transform51)
const gltfShape10 = new GLTFShape("190db6d0-c330-49c2-a950-9ed0ba7d7e5c/Plant_02/Plant_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
purpleOysterPlant.addComponentOrReplace(gltfShape10)

const purpleOysterPlant2 = new Entity('purpleOysterPlant2')
engine.addEntity(purpleOysterPlant2)
purpleOysterPlant2.setParent(_scene)
purpleOysterPlant2.addComponentOrReplace(gltfShape10)
const transform52 = new Transform({
  position: new Vector3(40.41764831542969, 1.7906098365783691, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleOysterPlant2.addComponentOrReplace(transform52)

const purpleOysterPlant4 = new Entity('purpleOysterPlant4')
engine.addEntity(purpleOysterPlant4)
purpleOysterPlant4.setParent(_scene)
purpleOysterPlant4.addComponentOrReplace(gltfShape10)
const transform53 = new Transform({
  position: new Vector3(39.5, 1.747643232345581, 12.734074592590332),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleOysterPlant4.addComponentOrReplace(transform53)

const furnacePipe10 = new Entity('furnacePipe10')
engine.addEntity(furnacePipe10)
furnacePipe10.setParent(_scene)
furnacePipe10.addComponentOrReplace(gltfShape5)
const transform54 = new Transform({
  position: new Vector3(23.97194480895996, 5.960464477539063e-8, 26.48312759399414),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.45667657256126404, 1.1780757904052734, 0.4906136393547058)
})
furnacePipe10.addComponentOrReplace(transform54)

const furnacePipe9 = new Entity('furnacePipe9')
engine.addEntity(furnacePipe9)
furnacePipe9.setParent(_scene)
furnacePipe9.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(25.69683837890625, 0, 23.117889404296875),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.45667725801467896, 1.178074836730957, 0.4906138479709625)
})
furnacePipe9.addComponentOrReplace(transform55)

const furnacePipe11 = new Entity('furnacePipe11')
engine.addEntity(furnacePipe11)
furnacePipe11.setParent(_scene)
furnacePipe11.addComponentOrReplace(gltfShape5)
const transform56 = new Transform({
  position: new Vector3(23.940324783325195, 0, 23.10650634765625),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.45667725801467896, 1.178074836730957, 0.4906138479709625)
})
furnacePipe11.addComponentOrReplace(transform56)

const furnacePipe12 = new Entity('furnacePipe12')
engine.addEntity(furnacePipe12)
furnacePipe12.setParent(_scene)
furnacePipe12.addComponentOrReplace(gltfShape5)
const transform57 = new Transform({
  position: new Vector3(25.728425979614258, 0.006857335567474365, 26.49090003967285),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.45667657256126404, 1.1780757904052734, 0.4906136393547058)
})
furnacePipe12.addComponentOrReplace(transform57)

const floorPlainWhiteSmall = new Entity('floorPlainWhiteSmall')
engine.addEntity(floorPlainWhiteSmall)
floorPlainWhiteSmall.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(23.85439682006836, 1.7287808656692505, 26.71234130859375),
  rotation: new Quaternion(3.1725131995465148e-15, -0.7037883400917053, 8.389809380560109e-8, 0.7104097604751587),
  scale: new Vector3(2.0515968799591064, 1, 0.9999995231628418)
})
floorPlainWhiteSmall.addComponentOrReplace(transform58)
const gltfShape11 = new GLTFShape("2ab2f951-6936-4e29-b66a-1715edcf5007/plainWhiteFloor_small.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
floorPlainWhiteSmall.addComponentOrReplace(gltfShape11)

const furnacePipe13 = new Entity('furnacePipe13')
engine.addEntity(furnacePipe13)
furnacePipe13.setParent(_scene)
furnacePipe13.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(23.97194480895996, 5.960464477539063e-8, 17.464067459106445),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766023635864, 1.178075909614563, 0.4906136691570282)
})
furnacePipe13.addComponentOrReplace(transform59)

const furnacePipe14 = new Entity('furnacePipe14')
engine.addEntity(furnacePipe14)
furnacePipe14.setParent(_scene)
furnacePipe14.addComponentOrReplace(gltfShape5)
const transform60 = new Transform({
  position: new Vector3(25.728425979614258, 0.006857335567474365, 17.471839904785156),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766023635864, 1.178075909614563, 0.4906136691570282)
})
furnacePipe14.addComponentOrReplace(transform60)

const furnacePipe15 = new Entity('furnacePipe15')
engine.addEntity(furnacePipe15)
furnacePipe15.setParent(_scene)
furnacePipe15.addComponentOrReplace(gltfShape5)
const transform61 = new Transform({
  position: new Vector3(23.940324783325195, 0, 14.087446212768555),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.4566773772239685, 1.178074836730957, 0.4906138777732849)
})
furnacePipe15.addComponentOrReplace(transform61)

const furnacePipe16 = new Entity('furnacePipe16')
engine.addEntity(furnacePipe16)
furnacePipe16.setParent(_scene)
furnacePipe16.addComponentOrReplace(gltfShape5)
const transform62 = new Transform({
  position: new Vector3(25.69683837890625, 0, 14.09882926940918),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.4566773772239685, 1.178074836730957, 0.4906138777732849)
})
furnacePipe16.addComponentOrReplace(transform62)

const floorPlainWhiteSmall2 = new Entity('floorPlainWhiteSmall2')
engine.addEntity(floorPlainWhiteSmall2)
floorPlainWhiteSmall2.setParent(_scene)
floorPlainWhiteSmall2.addComponentOrReplace(gltfShape11)
const transform63 = new Transform({
  position: new Vector3(23.85439682006836, 1.7287808656692505, 17.693281173706055),
  rotation: new Quaternion(3.1725131995465148e-15, -0.7037883400917053, 8.389809380560109e-8, 0.7104097604751587),
  scale: new Vector3(2.0515971183776855, 1, 0.999999463558197)
})
floorPlainWhiteSmall2.addComponentOrReplace(transform63)

const furnacePipe17 = new Entity('furnacePipe17')
engine.addEntity(furnacePipe17)
furnacePipe17.setParent(_scene)
furnacePipe17.addComponentOrReplace(gltfShape5)
const transform64 = new Transform({
  position: new Vector3(23.97194480895996, 5.960464477539063e-8, 8.774456024169922),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766321659088, 1.178075909614563, 0.4906136989593506)
})
furnacePipe17.addComponentOrReplace(transform64)

const furnacePipe18 = new Entity('furnacePipe18')
engine.addEntity(furnacePipe18)
furnacePipe18.setParent(_scene)
furnacePipe18.addComponentOrReplace(gltfShape5)
const transform65 = new Transform({
  position: new Vector3(25.728425979614258, 0.006857335567474365, 8.782228469848633),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766321659088, 1.178075909614563, 0.4906136989593506)
})
furnacePipe18.addComponentOrReplace(transform65)

const furnacePipe19 = new Entity('furnacePipe19')
engine.addEntity(furnacePipe19)
furnacePipe19.setParent(_scene)
furnacePipe19.addComponentOrReplace(gltfShape5)
const transform66 = new Transform({
  position: new Vector3(23.940324783325195, 0, 5.397834777832031),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.45667749643325806, 1.178074836730957, 0.4906139075756073)
})
furnacePipe19.addComponentOrReplace(transform66)

const furnacePipe20 = new Entity('furnacePipe20')
engine.addEntity(furnacePipe20)
furnacePipe20.setParent(_scene)
furnacePipe20.addComponentOrReplace(gltfShape5)
const transform67 = new Transform({
  position: new Vector3(25.69683837890625, 0, 5.409217834472656),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.45667749643325806, 1.178074836730957, 0.4906139075756073)
})
furnacePipe20.addComponentOrReplace(transform67)

const floorPlainWhiteSmall3 = new Entity('floorPlainWhiteSmall3')
engine.addEntity(floorPlainWhiteSmall3)
floorPlainWhiteSmall3.setParent(_scene)
floorPlainWhiteSmall3.addComponentOrReplace(gltfShape11)
const transform68 = new Transform({
  position: new Vector3(23.85439682006836, 1.7287808656692505, 9.003669738769531),
  rotation: new Quaternion(3.1725131995465148e-15, -0.7037883400917053, 8.389809380560109e-8, 0.7104097604751587),
  scale: new Vector3(2.0515973567962646, 1, 0.9999994039535522)
})
floorPlainWhiteSmall3.addComponentOrReplace(transform68)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(26.13623809814453, 0, 24.471277236938477),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795799255371094, 1.574419617652893, 1.376010775566101)
})
chairHighBack.addComponentOrReplace(transform69)
const gltfShape12 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
chairHighBack.addComponentOrReplace(gltfShape12)

const chairHighBack2 = new Entity('chairHighBack2')
engine.addEntity(chairHighBack2)
chairHighBack2.setParent(_scene)
chairHighBack2.addComponentOrReplace(gltfShape12)
const transform70 = new Transform({
  position: new Vector3(26.13623809814453, 0, 25.97856330871582),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795790910720825, 1.574419617652893, 1.3760099411010742)
})
chairHighBack2.addComponentOrReplace(transform70)

const chairHighBack3 = new Entity('chairHighBack3')
engine.addEntity(chairHighBack3)
chairHighBack3.setParent(_scene)
chairHighBack3.addComponentOrReplace(gltfShape12)
const transform71 = new Transform({
  position: new Vector3(23.5075626373291, 1.796824875555103e-7, 24.99127769470215),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795809984207153, 1.574419617652893, 1.3760114908218384)
})
chairHighBack3.addComponentOrReplace(transform71)

const chairHighBack4 = new Entity('chairHighBack4')
engine.addEntity(chairHighBack4)
chairHighBack4.setParent(_scene)
chairHighBack4.addComponentOrReplace(gltfShape12)
const transform72 = new Transform({
  position: new Vector3(23.5075626373291, 0, 23.483991622924805),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795804023742676, 1.574419617652893, 1.3760108947753906)
})
chairHighBack4.addComponentOrReplace(transform72)

const chairHighBack5 = new Entity('chairHighBack5')
engine.addEntity(chairHighBack5)
chairHighBack5.setParent(_scene)
chairHighBack5.addComponentOrReplace(gltfShape12)
const transform73 = new Transform({
  position: new Vector3(26.13623809814453, 0, 16.79983901977539),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795790910720825, 1.574419617652893, 1.3760099411010742)
})
chairHighBack5.addComponentOrReplace(transform73)

const chairHighBack6 = new Entity('chairHighBack6')
engine.addEntity(chairHighBack6)
chairHighBack6.setParent(_scene)
chairHighBack6.addComponentOrReplace(gltfShape12)
const transform74 = new Transform({
  position: new Vector3(26.13623809814453, 0, 15.292552947998047),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795799255371094, 1.574419617652893, 1.376010775566101)
})
chairHighBack6.addComponentOrReplace(transform74)

const chairHighBack7 = new Entity('chairHighBack7')
engine.addEntity(chairHighBack7)
chairHighBack7.setParent(_scene)
chairHighBack7.addComponentOrReplace(gltfShape12)
const transform75 = new Transform({
  position: new Vector3(23.5075626373291, 1.796824875555103e-7, 15.812553405761719),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795809984207153, 1.574419617652893, 1.3760114908218384)
})
chairHighBack7.addComponentOrReplace(transform75)

const chairHighBack8 = new Entity('chairHighBack8')
engine.addEntity(chairHighBack8)
chairHighBack8.setParent(_scene)
chairHighBack8.addComponentOrReplace(gltfShape12)
const transform76 = new Transform({
  position: new Vector3(23.5075626373291, 0, 14.305267333984375),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795804023742676, 1.574419617652893, 1.3760108947753906)
})
chairHighBack8.addComponentOrReplace(transform76)

const chairHighBack9 = new Entity('chairHighBack9')
engine.addEntity(chairHighBack9)
chairHighBack9.setParent(_scene)
chairHighBack9.addComponentOrReplace(gltfShape12)
const transform77 = new Transform({
  position: new Vector3(26.13623809814453, 0, 8.16701602935791),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795790910720825, 1.574419617652893, 1.3760099411010742)
})
chairHighBack9.addComponentOrReplace(transform77)

const chairHighBack10 = new Entity('chairHighBack10')
engine.addEntity(chairHighBack10)
chairHighBack10.setParent(_scene)
chairHighBack10.addComponentOrReplace(gltfShape12)
const transform78 = new Transform({
  position: new Vector3(26.13623809814453, 0, 6.659729957580566),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795799255371094, 1.574419617652893, 1.376010775566101)
})
chairHighBack10.addComponentOrReplace(transform78)

const chairHighBack11 = new Entity('chairHighBack11')
engine.addEntity(chairHighBack11)
chairHighBack11.setParent(_scene)
chairHighBack11.addComponentOrReplace(gltfShape12)
const transform79 = new Transform({
  position: new Vector3(23.5075626373291, 1.796824875555103e-7, 7.179730415344238),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795809984207153, 1.574419617652893, 1.3760114908218384)
})
chairHighBack11.addComponentOrReplace(transform79)

const chairHighBack12 = new Entity('chairHighBack12')
engine.addEntity(chairHighBack12)
chairHighBack12.setParent(_scene)
chairHighBack12.addComponentOrReplace(gltfShape12)
const transform80 = new Transform({
  position: new Vector3(23.5075626373291, 0, 5.6724443435668945),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795804023742676, 1.574419617652893, 1.3760108947753906)
})
chairHighBack12.addComponentOrReplace(transform80)

const floorGreySmall = new Entity('floorGreySmall')
engine.addEntity(floorGreySmall)
floorGreySmall.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(24.876602172851562, 1.7514262199401855, 15.430946350097656),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall.addComponentOrReplace(transform81)
const gltfShape13 = new GLTFShape("fb237b89-9ccc-41e9-91e2-1d08426417c1/GreyFloor_Small.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
floorGreySmall.addComponentOrReplace(gltfShape13)

const floorGreySmall2 = new Entity('floorGreySmall2')
engine.addEntity(floorGreySmall2)
floorGreySmall2.setParent(_scene)
floorGreySmall2.addComponentOrReplace(gltfShape13)
const transform82 = new Transform({
  position: new Vector3(24.876602172851562, 1.7514262199401855, 17.006521224975586),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall2.addComponentOrReplace(transform82)

const floorGreySmall3 = new Entity('floorGreySmall3')
engine.addEntity(floorGreySmall3)
floorGreySmall3.setParent(_scene)
floorGreySmall3.addComponentOrReplace(gltfShape13)
const transform83 = new Transform({
  position: new Vector3(24.876602172851562, 1.7514262199401855, 26.030115127563477),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall3.addComponentOrReplace(transform83)

const floorGreySmall4 = new Entity('floorGreySmall4')
engine.addEntity(floorGreySmall4)
floorGreySmall4.setParent(_scene)
floorGreySmall4.addComponentOrReplace(gltfShape13)
const transform84 = new Transform({
  position: new Vector3(24.876602172851562, 1.7514262199401855, 24.454540252685547),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall4.addComponentOrReplace(transform84)

const floorGreySmall5 = new Entity('floorGreySmall5')
engine.addEntity(floorGreySmall5)
floorGreySmall5.setParent(_scene)
floorGreySmall5.addComponentOrReplace(gltfShape13)
const transform85 = new Transform({
  position: new Vector3(24.876602172851562, 1.7514262199401855, 8.437854766845703),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall5.addComponentOrReplace(transform85)

const floorGreySmall6 = new Entity('floorGreySmall6')
engine.addEntity(floorGreySmall6)
floorGreySmall6.setParent(_scene)
floorGreySmall6.addComponentOrReplace(gltfShape13)
const transform86 = new Transform({
  position: new Vector3(24.876602172851562, 1.7514262199401855, 6.862279891967773),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall6.addComponentOrReplace(transform86)

const chairHighBack13 = new Entity('chairHighBack13')
engine.addEntity(chairHighBack13)
chairHighBack13.setParent(_scene)
chairHighBack13.addComponentOrReplace(gltfShape12)
const transform87 = new Transform({
  position: new Vector3(16.13623809814453, 0, 25.97856330871582),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795790910720825, 1.574419617652893, 1.3760099411010742)
})
chairHighBack13.addComponentOrReplace(transform87)

const chairHighBack14 = new Entity('chairHighBack14')
engine.addEntity(chairHighBack14)
chairHighBack14.setParent(_scene)
chairHighBack14.addComponentOrReplace(gltfShape12)
const transform88 = new Transform({
  position: new Vector3(16.13623809814453, 0, 24.471277236938477),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795799255371094, 1.574419617652893, 1.376010775566101)
})
chairHighBack14.addComponentOrReplace(transform88)

const floorGreySmall7 = new Entity('floorGreySmall7')
engine.addEntity(floorGreySmall7)
floorGreySmall7.setParent(_scene)
floorGreySmall7.addComponentOrReplace(gltfShape13)
const transform89 = new Transform({
  position: new Vector3(14.876602172851562, 1.7514262199401855, 26.030115127563477),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall7.addComponentOrReplace(transform89)

const floorGreySmall8 = new Entity('floorGreySmall8')
engine.addEntity(floorGreySmall8)
floorGreySmall8.setParent(_scene)
floorGreySmall8.addComponentOrReplace(gltfShape13)
const transform90 = new Transform({
  position: new Vector3(14.876602172851562, 1.7514262199401855, 24.454540252685547),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall8.addComponentOrReplace(transform90)

const floorPlainWhiteSmall4 = new Entity('floorPlainWhiteSmall4')
engine.addEntity(floorPlainWhiteSmall4)
floorPlainWhiteSmall4.setParent(_scene)
floorPlainWhiteSmall4.addComponentOrReplace(gltfShape11)
const transform91 = new Transform({
  position: new Vector3(13.85439682006836, 1.7287808656692505, 26.71234130859375),
  rotation: new Quaternion(3.1725131995465148e-15, -0.7037883400917053, 8.389809380560109e-8, 0.7104097604751587),
  scale: new Vector3(2.0515971183776855, 1, 0.999999463558197)
})
floorPlainWhiteSmall4.addComponentOrReplace(transform91)

const furnacePipe21 = new Entity('furnacePipe21')
engine.addEntity(furnacePipe21)
furnacePipe21.setParent(_scene)
furnacePipe21.addComponentOrReplace(gltfShape5)
const transform92 = new Transform({
  position: new Vector3(13.940324783325195, 0, 23.10650634765625),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.4566773772239685, 1.178074836730957, 0.4906138777732849)
})
furnacePipe21.addComponentOrReplace(transform92)

const furnacePipe22 = new Entity('furnacePipe22')
engine.addEntity(furnacePipe22)
furnacePipe22.setParent(_scene)
furnacePipe22.addComponentOrReplace(gltfShape5)
const transform93 = new Transform({
  position: new Vector3(15.69683837890625, 0, 23.117889404296875),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.4566773772239685, 1.178074836730957, 0.4906138777732849)
})
furnacePipe22.addComponentOrReplace(transform93)

const furnacePipe23 = new Entity('furnacePipe23')
engine.addEntity(furnacePipe23)
furnacePipe23.setParent(_scene)
furnacePipe23.addComponentOrReplace(gltfShape5)
const transform94 = new Transform({
  position: new Vector3(13.971944808959961, 5.960464477539063e-8, 26.48312759399414),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766023635864, 1.178075909614563, 0.4906136691570282)
})
furnacePipe23.addComponentOrReplace(transform94)

const chairHighBack15 = new Entity('chairHighBack15')
engine.addEntity(chairHighBack15)
chairHighBack15.setParent(_scene)
chairHighBack15.addComponentOrReplace(gltfShape12)
const transform95 = new Transform({
  position: new Vector3(13.507562637329102, 1.7881393432617188e-7, 24.99127769470215),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795809984207153, 1.574419617652893, 1.3760114908218384)
})
chairHighBack15.addComponentOrReplace(transform95)

const chairHighBack16 = new Entity('chairHighBack16')
engine.addEntity(chairHighBack16)
chairHighBack16.setParent(_scene)
chairHighBack16.addComponentOrReplace(gltfShape12)
const transform96 = new Transform({
  position: new Vector3(13.507562637329102, 0, 23.483991622924805),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795804023742676, 1.574419617652893, 1.3760108947753906)
})
chairHighBack16.addComponentOrReplace(transform96)

const furnacePipe24 = new Entity('furnacePipe24')
engine.addEntity(furnacePipe24)
furnacePipe24.setParent(_scene)
furnacePipe24.addComponentOrReplace(gltfShape5)
const transform97 = new Transform({
  position: new Vector3(15.728425979614258, 0.006857335567474365, 26.49090003967285),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766023635864, 1.178075909614563, 0.4906136691570282)
})
furnacePipe24.addComponentOrReplace(transform97)

const chairHighBack17 = new Entity('chairHighBack17')
engine.addEntity(chairHighBack17)
chairHighBack17.setParent(_scene)
chairHighBack17.addComponentOrReplace(gltfShape12)
const transform98 = new Transform({
  position: new Vector3(16.13623809814453, 0, 16.97856330871582),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795790910720825, 1.574419617652893, 1.3760099411010742)
})
chairHighBack17.addComponentOrReplace(transform98)

const chairHighBack18 = new Entity('chairHighBack18')
engine.addEntity(chairHighBack18)
chairHighBack18.setParent(_scene)
chairHighBack18.addComponentOrReplace(gltfShape12)
const transform99 = new Transform({
  position: new Vector3(16.13623809814453, 0, 15.471277236938477),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795799255371094, 1.574419617652893, 1.376010775566101)
})
chairHighBack18.addComponentOrReplace(transform99)

const floorGreySmall9 = new Entity('floorGreySmall9')
engine.addEntity(floorGreySmall9)
floorGreySmall9.setParent(_scene)
floorGreySmall9.addComponentOrReplace(gltfShape13)
const transform100 = new Transform({
  position: new Vector3(14.876602172851562, 1.7514262199401855, 17.030115127563477),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall9.addComponentOrReplace(transform100)

const floorGreySmall10 = new Entity('floorGreySmall10')
engine.addEntity(floorGreySmall10)
floorGreySmall10.setParent(_scene)
floorGreySmall10.addComponentOrReplace(gltfShape13)
const transform101 = new Transform({
  position: new Vector3(14.876602172851562, 1.7514262199401855, 15.454540252685547),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall10.addComponentOrReplace(transform101)

const floorPlainWhiteSmall5 = new Entity('floorPlainWhiteSmall5')
engine.addEntity(floorPlainWhiteSmall5)
floorPlainWhiteSmall5.setParent(_scene)
floorPlainWhiteSmall5.addComponentOrReplace(gltfShape11)
const transform102 = new Transform({
  position: new Vector3(13.85439682006836, 1.7287808656692505, 17.71234130859375),
  rotation: new Quaternion(3.1725131995465148e-15, -0.7037883400917053, 8.389809380560109e-8, 0.7104097604751587),
  scale: new Vector3(2.0515973567962646, 1, 0.9999994039535522)
})
floorPlainWhiteSmall5.addComponentOrReplace(transform102)

const furnacePipe25 = new Entity('furnacePipe25')
engine.addEntity(furnacePipe25)
furnacePipe25.setParent(_scene)
furnacePipe25.addComponentOrReplace(gltfShape5)
const transform103 = new Transform({
  position: new Vector3(13.940324783325195, 0, 14.10650634765625),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.45667749643325806, 1.178074836730957, 0.4906139075756073)
})
furnacePipe25.addComponentOrReplace(transform103)

const furnacePipe26 = new Entity('furnacePipe26')
engine.addEntity(furnacePipe26)
furnacePipe26.setParent(_scene)
furnacePipe26.addComponentOrReplace(gltfShape5)
const transform104 = new Transform({
  position: new Vector3(15.69683837890625, 0, 14.117889404296875),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.45667749643325806, 1.178074836730957, 0.4906139075756073)
})
furnacePipe26.addComponentOrReplace(transform104)

const furnacePipe27 = new Entity('furnacePipe27')
engine.addEntity(furnacePipe27)
furnacePipe27.setParent(_scene)
furnacePipe27.addComponentOrReplace(gltfShape5)
const transform105 = new Transform({
  position: new Vector3(13.971944808959961, 5.960464477539063e-8, 17.48312759399414),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766321659088, 1.178075909614563, 0.4906136989593506)
})
furnacePipe27.addComponentOrReplace(transform105)

const chairHighBack19 = new Entity('chairHighBack19')
engine.addEntity(chairHighBack19)
chairHighBack19.setParent(_scene)
chairHighBack19.addComponentOrReplace(gltfShape12)
const transform106 = new Transform({
  position: new Vector3(13.507562637329102, 1.7881393432617188e-7, 15.991277694702148),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795809984207153, 1.574419617652893, 1.3760114908218384)
})
chairHighBack19.addComponentOrReplace(transform106)

const chairHighBack20 = new Entity('chairHighBack20')
engine.addEntity(chairHighBack20)
chairHighBack20.setParent(_scene)
chairHighBack20.addComponentOrReplace(gltfShape12)
const transform107 = new Transform({
  position: new Vector3(13.507562637329102, 0, 14.483991622924805),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795804023742676, 1.574419617652893, 1.3760108947753906)
})
chairHighBack20.addComponentOrReplace(transform107)

const furnacePipe28 = new Entity('furnacePipe28')
engine.addEntity(furnacePipe28)
furnacePipe28.setParent(_scene)
furnacePipe28.addComponentOrReplace(gltfShape5)
const transform108 = new Transform({
  position: new Vector3(15.728425979614258, 0.006857335567474365, 17.49090003967285),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766321659088, 1.178075909614563, 0.4906136989593506)
})
furnacePipe28.addComponentOrReplace(transform108)

const chairHighBack21 = new Entity('chairHighBack21')
engine.addEntity(chairHighBack21)
chairHighBack21.setParent(_scene)
chairHighBack21.addComponentOrReplace(gltfShape12)
const transform109 = new Transform({
  position: new Vector3(16.13623809814453, 0, 7.897789001464844),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795790910720825, 1.574419617652893, 1.3760099411010742)
})
chairHighBack21.addComponentOrReplace(transform109)

const chairHighBack22 = new Entity('chairHighBack22')
engine.addEntity(chairHighBack22)
chairHighBack22.setParent(_scene)
chairHighBack22.addComponentOrReplace(gltfShape12)
const transform110 = new Transform({
  position: new Vector3(16.13623809814453, 0, 6.3905029296875),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4795799255371094, 1.574419617652893, 1.376010775566101)
})
chairHighBack22.addComponentOrReplace(transform110)

const floorGreySmall11 = new Entity('floorGreySmall11')
engine.addEntity(floorGreySmall11)
floorGreySmall11.setParent(_scene)
floorGreySmall11.addComponentOrReplace(gltfShape13)
const transform111 = new Transform({
  position: new Vector3(14.876602172851562, 1.7514262199401855, 6.37376594543457),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall11.addComponentOrReplace(transform111)

const floorGreySmall12 = new Entity('floorGreySmall12')
engine.addEntity(floorGreySmall12)
floorGreySmall12.setParent(_scene)
floorGreySmall12.addComponentOrReplace(gltfShape13)
const transform112 = new Transform({
  position: new Vector3(14.876602172851562, 1.7514262199401855, 7.9493408203125),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(0.6464071869850159, 1.0000004768371582, 0.3544190526008606)
})
floorGreySmall12.addComponentOrReplace(transform112)

const floorPlainWhiteSmall6 = new Entity('floorPlainWhiteSmall6')
engine.addEntity(floorPlainWhiteSmall6)
floorPlainWhiteSmall6.setParent(_scene)
floorPlainWhiteSmall6.addComponentOrReplace(gltfShape11)
const transform113 = new Transform({
  position: new Vector3(13.85439682006836, 1.7287808656692505, 8.631567001342773),
  rotation: new Quaternion(3.1725131995465148e-15, -0.7037883400917053, 8.389809380560109e-8, 0.7104097604751587),
  scale: new Vector3(2.051597833633423, 1, 0.9999992847442627)
})
floorPlainWhiteSmall6.addComponentOrReplace(transform113)

const chairHighBack23 = new Entity('chairHighBack23')
engine.addEntity(chairHighBack23)
chairHighBack23.setParent(_scene)
chairHighBack23.addComponentOrReplace(gltfShape12)
const transform114 = new Transform({
  position: new Vector3(13.507562637329102, 1.7881393432617188e-7, 6.910503387451172),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795809984207153, 1.574419617652893, 1.3760114908218384)
})
chairHighBack23.addComponentOrReplace(transform114)

const chairHighBack24 = new Entity('chairHighBack24')
engine.addEntity(chairHighBack24)
chairHighBack24.setParent(_scene)
chairHighBack24.addComponentOrReplace(gltfShape12)
const transform115 = new Transform({
  position: new Vector3(13.507562637329102, 0, 5.403217315673828),
  rotation: new Quaternion(5.763293064764722e-15, -0.7071067690849304, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.4795804023742676, 1.574419617652893, 1.3760108947753906)
})
chairHighBack24.addComponentOrReplace(transform115)

const furnacePipe29 = new Entity('furnacePipe29')
engine.addEntity(furnacePipe29)
furnacePipe29.setParent(_scene)
furnacePipe29.addComponentOrReplace(gltfShape5)
const transform116 = new Transform({
  position: new Vector3(13.971944808959961, 5.960464477539063e-8, 8.402353286743164),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766917705536, 1.178075909614563, 0.49061375856399536)
})
furnacePipe29.addComponentOrReplace(transform116)

const furnacePipe30 = new Entity('furnacePipe30')
engine.addEntity(furnacePipe30)
furnacePipe30.setParent(_scene)
furnacePipe30.addComponentOrReplace(gltfShape5)
const transform117 = new Transform({
  position: new Vector3(13.940324783325195, 0, 5.025732040405273),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.4566779136657715, 1.178074836730957, 0.4906139671802521)
})
furnacePipe30.addComponentOrReplace(transform117)

const furnacePipe31 = new Entity('furnacePipe31')
engine.addEntity(furnacePipe31)
furnacePipe31.setParent(_scene)
furnacePipe31.addComponentOrReplace(gltfShape5)
const transform118 = new Transform({
  position: new Vector3(15.69683837890625, 0, 5.037115097045898),
  rotation: new Quaternion(0.08120110630989075, -0.6990883350372314, -0.08196498453617096, 0.7056654691696167),
  scale: new Vector3(0.4566779136657715, 1.178074836730957, 0.4906139671802521)
})
furnacePipe31.addComponentOrReplace(transform118)

const furnacePipe32 = new Entity('furnacePipe32')
engine.addEntity(furnacePipe32)
furnacePipe32.setParent(_scene)
furnacePipe32.addComponentOrReplace(gltfShape5)
const transform119 = new Transform({
  position: new Vector3(15.728425979614258, 0.006857335567474365, 8.410125732421875),
  rotation: new Quaternion(-0.09959257394075394, -0.6967060565948486, 0.10052964836359024, 0.7032608985900879),
  scale: new Vector3(0.4566766917705536, 1.178075909614563, 0.49061375856399536)
})
furnacePipe32.addComponentOrReplace(transform119)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
concreteWall.addComponentOrReplace(gltfShape2)
const transform120 = new Transform({
  position: new Vector3(0, 0, 18.64884376525879),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.296318054199219, 2.193363666534424, 1.0000038146972656)
})
concreteWall.addComponentOrReplace(transform120)

const roofGrey = new Entity('roofGrey')
engine.addEntity(roofGrey)
roofGrey.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(48, 4.797652244567871, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.973345756530762, 1, 3.9241623878479004)
})
roofGrey.addComponentOrReplace(transform121)
const gltfShape14 = new GLTFShape("0fe017c0-bb51-4645-88a8-f9305cbaf2bf/GreyRoof.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
roofGrey.addComponentOrReplace(gltfShape14)

const roofGrey2 = new Entity('roofGrey2')
engine.addEntity(roofGrey2)
roofGrey2.setParent(_scene)
roofGrey2.addComponentOrReplace(gltfShape14)
const transform122 = new Transform({
  position: new Vector3(48, 4.797652244567871, 18.88141441345215),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.973345756530762, 1, 4.6992974281311035)
})
roofGrey2.addComponentOrReplace(transform122)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape2)
const transform123 = new Transform({
  position: new Vector3(16.32459831237793, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.299245357513428, 2.193363666534424, 0.9999996423721313)
})
concreteWall2.addComponentOrReplace(transform123)

const displayMonitor = new Entity('displayMonitor')
engine.addEntity(displayMonitor)
displayMonitor.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(24, 1.7389997243881226, 16.36837387084961),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.2755409479141235, 1, 1.0000038146972656)
})
displayMonitor.addComponentOrReplace(transform124)
const gltfShape15 = new GLTFShape("d7c52da1-a693-42d3-b546-c608cb5e0fe6/Display_Monitor.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
displayMonitor.addComponentOrReplace(gltfShape15)

const displayMonitor2 = new Entity('displayMonitor2')
engine.addEntity(displayMonitor2)
displayMonitor2.setParent(_scene)
displayMonitor2.addComponentOrReplace(gltfShape15)
const transform125 = new Transform({
  position: new Vector3(14.29478931427002, 1.7389997243881226, 25.36837387084961),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.2755409479141235, 1, 1.0000052452087402)
})
displayMonitor2.addComponentOrReplace(transform125)

const displayMonitor3 = new Entity('displayMonitor3')
engine.addEntity(displayMonitor3)
displayMonitor3.setParent(_scene)
displayMonitor3.addComponentOrReplace(gltfShape15)
const transform126 = new Transform({
  position: new Vector3(14.29478931427002, 1.7389997243881226, 5.759116172790527),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.2755409479141235, 1, 1.0000057220458984)
})
displayMonitor3.addComponentOrReplace(transform126)

const displayMonitor4 = new Entity('displayMonitor4')
engine.addEntity(displayMonitor4)
displayMonitor4.setParent(_scene)
displayMonitor4.addComponentOrReplace(gltfShape15)
const transform127 = new Transform({
  position: new Vector3(25.515840530395508, 1.7389997243881226, 25.36837387084961),
  rotation: new Quaternion(-4.033602235044027e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.2755404710769653, 1, 1.000004768371582)
})
displayMonitor4.addComponentOrReplace(transform127)

const displayMonitor5 = new Entity('displayMonitor5')
engine.addEntity(displayMonitor5)
displayMonitor5.setParent(_scene)
displayMonitor5.addComponentOrReplace(gltfShape15)
const transform128 = new Transform({
  position: new Vector3(25.515840530395508, 1.7389997243881226, 6.218500137329102),
  rotation: new Quaternion(-4.033602235044027e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.2755404710769653, 1, 1.0000054836273193)
})
displayMonitor5.addComponentOrReplace(transform128)

const displayMonitor6 = new Entity('displayMonitor6')
engine.addEntity(displayMonitor6)
displayMonitor6.setParent(_scene)
displayMonitor6.addComponentOrReplace(gltfShape15)
const transform129 = new Transform({
  position: new Vector3(14.389482498168945, 1.7389997243881226, 16.346233367919922),
  rotation: new Quaternion(-4.033602235044027e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.2755404710769653, 1, 1.0000059604644775)
})
displayMonitor6.addComponentOrReplace(transform129)

const furnacePipe33 = new Entity('furnacePipe33')
engine.addEntity(furnacePipe33)
furnacePipe33.setParent(_scene)
furnacePipe33.addComponentOrReplace(gltfShape5)
const transform130 = new Transform({
  position: new Vector3(3, 5.312747001647949, 20.291994094848633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4566759765148163, 3.418198585510254, 0.49061352014541626)
})
furnacePipe33.addComponentOrReplace(transform130)

const furnacePipe34 = new Entity('furnacePipe34')
engine.addEntity(furnacePipe34)
furnacePipe34.setParent(_scene)
furnacePipe34.addComponentOrReplace(gltfShape5)
const transform131 = new Transform({
  position: new Vector3(6.5, 5.312747001647949, 20.291994094848633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5322413444519043, 3.418198585510254, 0.5765116214752197)
})
furnacePipe34.addComponentOrReplace(transform131)

const furnacePipe35 = new Entity('furnacePipe35')
engine.addEntity(furnacePipe35)
furnacePipe35.setParent(_scene)
furnacePipe35.addComponentOrReplace(gltfShape5)
const transform132 = new Transform({
  position: new Vector3(6.5, 5.312747001647949, 11.543636322021484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5857490301132202, 3.418198585510254, 0.48398852348327637)
})
furnacePipe35.addComponentOrReplace(transform132)

const furnacePipe36 = new Entity('furnacePipe36')
engine.addEntity(furnacePipe36)
furnacePipe36.setParent(_scene)
furnacePipe36.addComponentOrReplace(gltfShape5)
const transform133 = new Transform({
  position: new Vector3(3, 5.312747001647949, 11.543636322021484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5227234959602356, 3.418198585510254, 0.5074946880340576)
})
furnacePipe36.addComponentOrReplace(transform133)

const arecaPalm3 = new Entity('arecaPalm3')
engine.addEntity(arecaPalm3)
arecaPalm3.setParent(_scene)
arecaPalm3.addComponentOrReplace(gltfShape8)
const transform134 = new Transform({
  position: new Vector3(3, 5.543153285980225, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
arecaPalm3.addComponentOrReplace(transform134)

const arecaPalm7 = new Entity('arecaPalm7')
engine.addEntity(arecaPalm7)
arecaPalm7.setParent(_scene)
arecaPalm7.addComponentOrReplace(gltfShape8)
const transform135 = new Transform({
  position: new Vector3(3, 5.543153285980225, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm7.addComponentOrReplace(transform135)

const beachgrassFern6 = new Entity('beachgrassFern6')
engine.addEntity(beachgrassFern6)
beachgrassFern6.setParent(_scene)
beachgrassFern6.addComponentOrReplace(gltfShape7)
const transform136 = new Transform({
  position: new Vector3(4.5, 5.411567211151123, 19.346986770629883),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern6.addComponentOrReplace(transform136)

const beachgrassFern7 = new Entity('beachgrassFern7')
engine.addEntity(beachgrassFern7)
beachgrassFern7.setParent(_scene)
beachgrassFern7.addComponentOrReplace(gltfShape7)
const transform137 = new Transform({
  position: new Vector3(4.5, 5.411567211151123, 17.55924415588379),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern7.addComponentOrReplace(transform137)

const arecaPalm8 = new Entity('arecaPalm8')
engine.addEntity(arecaPalm8)
arecaPalm8.setParent(_scene)
arecaPalm8.addComponentOrReplace(gltfShape8)
const transform138 = new Transform({
  position: new Vector3(3, 5.543153285980225, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm8.addComponentOrReplace(transform138)

const purpleHeartPlant = new Entity('purpleHeartPlant')
engine.addEntity(purpleHeartPlant)
purpleHeartPlant.setParent(_scene)
purpleHeartPlant.addComponentOrReplace(gltfShape9)
const transform139 = new Transform({
  position: new Vector3(3, 6.134807109832764, 17.298568725585938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.12662410736084, 1.2942861318588257)
})
purpleHeartPlant.addComponentOrReplace(transform139)

const purpleHeartPlant6 = new Entity('purpleHeartPlant6')
engine.addEntity(purpleHeartPlant6)
purpleHeartPlant6.setParent(_scene)
purpleHeartPlant6.addComponentOrReplace(gltfShape9)
const transform140 = new Transform({
  position: new Vector3(3, 6.134807109832764, 18.93978500366211),
  rotation: new Quaternion(-4.144438190258146e-15, -0.9081679582595825, 1.0826204999148104e-7, 0.4186060428619385),
  scale: new Vector3(0.9711463451385498, 2.12662410736084, 1.333595633506775)
})
purpleHeartPlant6.addComponentOrReplace(transform140)

const beachgrassFern8 = new Entity('beachgrassFern8')
engine.addEntity(beachgrassFern8)
beachgrassFern8.setParent(_scene)
beachgrassFern8.addComponentOrReplace(gltfShape7)
const transform141 = new Transform({
  position: new Vector3(4.5, 5.411567211151123, 15.723608016967773),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern8.addComponentOrReplace(transform141)

const purpleHeartPlant7 = new Entity('purpleHeartPlant7')
engine.addEntity(purpleHeartPlant7)
purpleHeartPlant7.setParent(_scene)
purpleHeartPlant7.addComponentOrReplace(gltfShape9)
const transform142 = new Transform({
  position: new Vector3(3, 6.134807109832764, 15.427685737609863),
  rotation: new Quaternion(-4.144438190258146e-15, -0.9081679582595825, 1.0826204999148104e-7, 0.4186060428619385),
  scale: new Vector3(0.9711467623710632, 2.12662410736084, 1.3335964679718018)
})
purpleHeartPlant7.addComponentOrReplace(transform142)

const arecaPalm11 = new Entity('arecaPalm11')
engine.addEntity(arecaPalm11)
arecaPalm11.setParent(_scene)
arecaPalm11.addComponentOrReplace(gltfShape8)
const transform143 = new Transform({
  position: new Vector3(3, 5.543153285980225, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
arecaPalm11.addComponentOrReplace(transform143)

const beachgrassFern9 = new Entity('beachgrassFern9')
engine.addEntity(beachgrassFern9)
beachgrassFern9.setParent(_scene)
beachgrassFern9.addComponentOrReplace(gltfShape7)
const transform144 = new Transform({
  position: new Vector3(4.5, 5.411567211151123, 13.633108139038086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern9.addComponentOrReplace(transform144)

const purpleHeartPlant8 = new Entity('purpleHeartPlant8')
engine.addEntity(purpleHeartPlant8)
purpleHeartPlant8.setParent(_scene)
purpleHeartPlant8.addComponentOrReplace(gltfShape9)
const transform145 = new Transform({
  position: new Vector3(3, 6.134807109832764, 13.573944091796875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.12662410736084, 1.2942861318588257)
})
purpleHeartPlant8.addComponentOrReplace(transform145)

const arecaPalm13 = new Entity('arecaPalm13')
engine.addEntity(arecaPalm13)
arecaPalm13.setParent(_scene)
arecaPalm13.addComponentOrReplace(gltfShape8)
const transform146 = new Transform({
  position: new Vector3(3, 5.543153285980225, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm13.addComponentOrReplace(transform146)

const beachgrassFern16 = new Entity('beachgrassFern16')
engine.addEntity(beachgrassFern16)
beachgrassFern16.setParent(_scene)
beachgrassFern16.addComponentOrReplace(gltfShape7)
const transform147 = new Transform({
  position: new Vector3(4.5, 5.411567211151123, 11.866891860961914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.784893274307251, 3.208326578140259, 2.7261855602264404)
})
beachgrassFern16.addComponentOrReplace(transform147)

const longOpenedWoodenCrate3 = new Entity('longOpenedWoodenCrate3')
engine.addEntity(longOpenedWoodenCrate3)
longOpenedWoodenCrate3.setParent(_scene)
longOpenedWoodenCrate3.addComponentOrReplace(gltfShape6)
const transform148 = new Transform({
  position: new Vector3(4.719867706298828, 4.954618453979492, 15.859443664550781),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.3017449378967285, 3.068925142288208, 6.5700154304504395)
})
longOpenedWoodenCrate3.addComponentOrReplace(transform148)

const furnacePipe37 = new Entity('furnacePipe37')
engine.addEntity(furnacePipe37)
furnacePipe37.setParent(_scene)
furnacePipe37.addComponentOrReplace(gltfShape5)
const transform149 = new Transform({
  position: new Vector3(3.0275816917419434, 0, 20.711341857910156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4566759765148163, 0.4601687490940094, 0.49061352014541626)
})
furnacePipe37.addComponentOrReplace(transform149)

const furnacePipe38 = new Entity('furnacePipe38')
engine.addEntity(furnacePipe38)
furnacePipe38.setParent(_scene)
furnacePipe38.addComponentOrReplace(gltfShape5)
const transform150 = new Transform({
  position: new Vector3(6.527581691741943, 0, 20.711341857910156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5322413444519043, 0.4601687490940094, 0.5765116214752197)
})
furnacePipe38.addComponentOrReplace(transform150)

const furnacePipe39 = new Entity('furnacePipe39')
engine.addEntity(furnacePipe39)
furnacePipe39.setParent(_scene)
furnacePipe39.addComponentOrReplace(gltfShape5)
const transform151 = new Transform({
  position: new Vector3(3.0275816917419434, 0, 11.502857208251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5227234959602356, 0.4601687490940094, 0.5074946880340576)
})
furnacePipe39.addComponentOrReplace(transform151)

const furnacePipe40 = new Entity('furnacePipe40')
engine.addEntity(furnacePipe40)
furnacePipe40.setParent(_scene)
furnacePipe40.addComponentOrReplace(gltfShape5)
const transform152 = new Transform({
  position: new Vector3(6.527581691741943, 0, 11.502857208251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5857490301132202, 0.4601687490940094, 0.48398852348327637)
})
furnacePipe40.addComponentOrReplace(transform152)

const longOpenedWoodenCrate4 = new Entity('longOpenedWoodenCrate4')
engine.addEntity(longOpenedWoodenCrate4)
longOpenedWoodenCrate4.setParent(_scene)
longOpenedWoodenCrate4.addComponentOrReplace(gltfShape6)
const transform153 = new Transform({
  position: new Vector3(4.7474493980407715, 0.6642826795578003, 16.087718963623047),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.332701683044434, 3.497873306274414, 6.034189701080322)
})
longOpenedWoodenCrate4.addComponentOrReplace(transform153)

const beachgrassFern17 = new Entity('beachgrassFern17')
engine.addEntity(beachgrassFern17)
beachgrassFern17.setParent(_scene)
beachgrassFern17.addComponentOrReplace(gltfShape7)
const transform154 = new Transform({
  position: new Vector3(4.6247687339782715, 0.7771458625793457, 11.700065612792969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern17.addComponentOrReplace(transform154)

const beachgrassFern18 = new Entity('beachgrassFern18')
engine.addEntity(beachgrassFern18)
beachgrassFern18.setParent(_scene)
beachgrassFern18.addComponentOrReplace(gltfShape7)
const transform155 = new Transform({
  position: new Vector3(4.6247687339782715, 0.7771458625793457, 14.094844818115234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern18.addComponentOrReplace(transform155)

const purpleOysterPlant3 = new Entity('purpleOysterPlant3')
engine.addEntity(purpleOysterPlant3)
purpleOysterPlant3.setParent(_scene)
purpleOysterPlant3.addComponentOrReplace(gltfShape10)
const transform156 = new Transform({
  position: new Vector3(4.027581691741943, 1.747643232345581, 12.734074592590332),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleOysterPlant3.addComponentOrReplace(transform156)

const arecaPalm14 = new Entity('arecaPalm14')
engine.addEntity(arecaPalm14)
arecaPalm14.setParent(_scene)
arecaPalm14.addComponentOrReplace(gltfShape8)
const transform157 = new Transform({
  position: new Vector3(5.2834296226501465, 0.9494185447692871, 12.750654220581055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5147193670272827, 3.0485520362854004, 1.4001975059509277)
})
arecaPalm14.addComponentOrReplace(transform157)

const arecaPalm15 = new Entity('arecaPalm15')
engine.addEntity(arecaPalm15)
arecaPalm15.setParent(_scene)
arecaPalm15.addComponentOrReplace(gltfShape8)
const transform158 = new Transform({
  position: new Vector3(3.6703925132751465, 0.9494185447692871, 15.949248313903809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5147193670272827, 3.0485520362854004, 1.4001975059509277)
})
arecaPalm15.addComponentOrReplace(transform158)

const purpleOysterPlant5 = new Entity('purpleOysterPlant5')
engine.addEntity(purpleOysterPlant5)
purpleOysterPlant5.setParent(_scene)
purpleOysterPlant5.addComponentOrReplace(gltfShape10)
const transform159 = new Transform({
  position: new Vector3(4.945230007171631, 1.7906098365783691, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleOysterPlant5.addComponentOrReplace(transform159)

const arecaPalm16 = new Entity('arecaPalm16')
engine.addEntity(arecaPalm16)
arecaPalm16.setParent(_scene)
arecaPalm16.addComponentOrReplace(gltfShape8)
const transform160 = new Transform({
  position: new Vector3(4.582040309906006, 0.9494185447692871, 18.488479614257812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5147193670272827, 3.0485520362854004, 1.4001975059509277)
})
arecaPalm16.addComponentOrReplace(transform160)

const purpleOysterPlant6 = new Entity('purpleOysterPlant6')
engine.addEntity(purpleOysterPlant6)
purpleOysterPlant6.setParent(_scene)
purpleOysterPlant6.addComponentOrReplace(gltfShape10)
const transform161 = new Transform({
  position: new Vector3(3.0275816917419434, 1.9913458824157715, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleOysterPlant6.addComponentOrReplace(transform161)

const beachgrassFern19 = new Entity('beachgrassFern19')
engine.addEntity(beachgrassFern19)
beachgrassFern19.setParent(_scene)
beachgrassFern19.addComponentOrReplace(gltfShape7)
const transform162 = new Transform({
  position: new Vector3(3.8761115074157715, 0.7771458625793457, 19.984636306762695),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern19.addComponentOrReplace(transform162)

const beachgrassFern20 = new Entity('beachgrassFern20')
engine.addEntity(beachgrassFern20)
beachgrassFern20.setParent(_scene)
beachgrassFern20.addComponentOrReplace(gltfShape7)
const transform163 = new Transform({
  position: new Vector3(4.6247687339782715, 0.7771458625793457, 17.611675262451172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.14577317237854, 4.200340747833252, 2.8311927318573)
})
beachgrassFern20.addComponentOrReplace(transform163)

const zomato = new Entity('zomato')
engine.addEntity(zomato)
zomato.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(27, 4, 0.45918452739715576),
  rotation: new Quaternion(0.7071068286895752, 6.384405374401188e-18, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.5303584337234497, 1.000002384185791)
})
zomato.addComponentOrReplace(transform164)
const gltfShape16 = new GLTFShape("b22bb59b-6fd7-49ae-91a2-89611ab9a681/zomato.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
zomato.addComponentOrReplace(gltfShape16)

const floorRed = new Entity('floorRed')
engine.addEntity(floorRed)
floorRed.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(28.5, 2.5, 0.2797829508781433),
  rotation: new Quaternion(0.70710688829422, 1.4289997450386946e-15, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(2.5, 1, 1)
})
floorRed.addComponentOrReplace(transform165)
const gltfShape17 = new GLTFShape("8f9ae905-00de-4ae1-b2ef-dab27559eb50/RedFloor.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
floorRed.addComponentOrReplace(gltfShape17)

zomato.addComponent(new AudioSource(new AudioClip("Zomato.mp3")));
zomato.addComponent(
  new OnClick((): void=>{
    zomato.getComponent(AudioSource).playOnce();
  })
)

