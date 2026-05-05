import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";



const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            const SKIN_MESHES = new Set(["Face002", "Ear001", "Hand", "Neck"]);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                if (mesh.material) {
                  const cloneMat = () => (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                  if (SKIN_MESHES.has(mesh.name)) {
                    const m = cloneMat();
                    m.color = new THREE.Color("#c4844a");
                    m.roughness = 0.72;
                    m.metalness = 0.0;
                    mesh.material = m;
                  } else if (mesh.name === "BODY.SHIRT") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#1e2d40");
                    m.roughness = 0.88;
                    m.metalness = 0.0;
                    mesh.material = m;
                  } else if (mesh.name === "Pant") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#1a1a1a");
                    m.roughness = 0.88;
                    m.metalness = 0.0;
                    mesh.material = m;
                  } else if (mesh.name === "Hair") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#120c08");
                    m.roughness = 0.88;
                    m.metalness = 0.0;
                    mesh.material = m;
                  } else if (mesh.name === "CAP001") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#1e2d40");
                    m.roughness = 0.88;
                    mesh.material = m;
                  } else if (mesh.name === "CAP002") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#0d0d0d");
                    mesh.material = m;
                  } else if (mesh.name === "Shoe") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#1a1a1a");
                    m.roughness = 0.72;
                    mesh.material = m;
                  } else if (mesh.name === "Sole") {
                    const m = cloneMat();
                    m.color = new THREE.Color("#2e2e2e");
                    mesh.material = m;
                  }
                }
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            if (import.meta.env.DEV) console.error("Error loading GLTF model:", error);
            setAllTimeline();
            reject(error);
          }
        );
      } catch (err) {
        if (import.meta.env.DEV) console.error(err);
        setAllTimeline();
        reject(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
