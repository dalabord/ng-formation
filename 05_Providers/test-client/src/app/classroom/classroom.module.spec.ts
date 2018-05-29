import { ClassroomModule } from './classroom.module';

describe('ClassroomModule', () => {
  let classroomModule: ClassroomModule;

  beforeEach(() => {
    classroomModule = new ClassroomModule();
  });

  it('should create an instance', () => {
    expect(classroomModule).toBeTruthy();
  });
});
