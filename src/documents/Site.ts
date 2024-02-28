export interface BucketData {
  url: string;
  name: string;
  timeCreated: string;
}

export interface uploadFile {
  file: File;
}

export interface ImagemBlockAndCircuit {
  publicUrl: string;
  name: string;
}

export interface BlockAndCircuit {
  id: string;
  name: string;
  subtitle: string;
  entry: string;
  exit: string;
  duration: string;
  price: string;
  imagens: ImagemBlockAndCircuit[];
}

export interface ImagemDto {
  publicUrl: string;
  name: string;
}

export interface CreateBlock {
  id: string;
  name: string;
  entry: string;
  duration: string;
  exit: string;
  price: string;
  subtitle: string;
  imagens: ImagemDto[];
}
