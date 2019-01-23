import { TestBed, async } from '@angular/core/testing';
import { TasksList } from './tasks.list';
describe('TasksList', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TasksList
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TasksList);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'task-list'`, async(() => {
    const fixture = TestBed.createComponent(TasksList);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('task-list');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TasksList);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to task-list!');
  }));
});
